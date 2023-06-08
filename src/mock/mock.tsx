import {AxiosRequestConfig} from "axios";
import {zh_CN, fakerZH_CN as faker} from "@faker-js/faker";

type Mock = (config: AxiosRequestConfig) => [number, any]

export const mockSession: Mock = (config) => {
    return [200, {
        jwt: faker.lorem.word()
    }]
}