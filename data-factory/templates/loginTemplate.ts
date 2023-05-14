import { faker } from "@faker-js/faker";
import { ConfigReader } from "../../config-reader/config.reader";
import { DataFactory, TemplateMap } from "../DataFactory";
import { LoginEntity } from "../entities/LoginEntity";

export class LoginTemplate extends DataFactory<LoginEntity> {
    protected templates: TemplateMap<LoginEntity> = {
        invalidEmail: () => ({
            email: "invalidEmail@gmail.com",
            password: ConfigReader.PASSWORD
        }),
        invalidPassword: () => ({
            email: ConfigReader.EMAIL,
            password: "invalidpass",
        }),
        fakerEmailAndPassword: () => ({
            email: faker.internet.email(),
            password: faker.internet.password()
        })
    };
}