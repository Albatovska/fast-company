import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import { validator } from "../../../utils/validator";

const UserEditPage = () => {
    const { id } = useParams();
    const histoty = useHistory();
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({ isLoaded: false });
    useEffect(() => {
        api.users.getById(id).then((data) =>
            setData({
                ...data,
                profession: data.profession._id,
                qualities: data.qualities.map((quality) => ({
                    label: quality.name,
                    value: quality._id
                })),
                isLoaded: true
            })
        );
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));

        return () => setData(null);
    }, []);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);

        const userModified = {
            ...data,
            profession: Object.keys(professions)
                .map((professionName) => professions[professionName])
                .find((prof) => prof._id === data.profession),
            qualities: Object.keys(qualities)
                .map((qualityName) => qualities[qualityName])
                .filter((quality) =>
                    data.qualities.some((item) => item.value === quality._id)
                )
        };
        console.log("userModified", userModified);
        api.users.update(id, userModified).then(() => histoty.goBack());
    };
    if (!data.isLoaded) {
        return <h1>Loading</h1>;
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {data.isLoaded && (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption={data.profession}
                                options={professions}
                                name="profession"
                                onChange={handleChange}
                                value={data.profession}
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                label="Выберите ваши качества"
                                options={qualities}
                                defaultValue={data.qualities}
                                name="qualities"
                                onChange={handleChange}
                            />
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                                disabled={!isValid}
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserEditPage;
