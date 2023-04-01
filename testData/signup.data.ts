import { faker } from '@faker-js/faker';
import { Builder } from "builder-pattern";


export class SignupBuilder {

    _name: string;
    _emailAddress: string;
    _password: string;
    _day: string;
    _month: string;
    _year: string;
    _firstName: string;
    _lastName: string;
    _address: string;
    _country: string;
    _state: string;
    _city: string;
    _zipCode: string;
    _phone: string;

    public static getRandomUserSignupData(): SignupBuilder {
        return Builder<SignupBuilder>()
            .name(faker.name.fullName())
            .emailAddress(faker.internet.email())
            .password(faker.internet.password())
            .day("1")
            .month(faker.date.month())
            .year("1990")
            .firstName(faker.name.firstName())
            .lastName(faker.name.lastName())
            .address(faker.address.streetAddress())
            ._country("United States")
            .state(faker.address.stateAbbr())
            .city(faker.address.city())
            .zipCode(faker.address.zipCode())
            .phone(faker.phone.number('###-###-###'))
            .build();
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get emailAddress(): string {
        return this._emailAddress;
    }

    set emailAddress(emailAddress: string) {
        this._emailAddress = emailAddress;
    }

    get password(): string {
        return this._password;
    }

    set password(password: string) {
        this._password = password;
    }

    get day(): string {
        return this._day;
    }

    set day(day: string) {
        this._day = day;
    }

    get month(): string {
        return this._month;
    }

    set month(month: string) {
        this._month = month;
    }

    get year(): string {
        return this._year;
    }

    set year(year: string) {
        this._year = year;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }

    get country(): string {
        return this._country;
    }

    set country(country: string) {
        this._country = country;
    }

    get state(): string {
        return this._state;
    }

    set state(state: string) {
        this._state = state;
    }

    get city(): string {
        return this._city;
    }

    set city(city: string) {
        this._city = city;
    }

    get zipCode(): string {
        return this._zipCode;
    }

    set zipCode(zipCode: string) {
        this._zipCode = zipCode;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    toString(): string {
        return `SignupBuilder { name: ${this.name}, emailAddress: ${this.emailAddress}, password: ${this.password}, day: ${this.day}, month: ${this.month}, year: ${this.year}, firstName: ${this.firstName}, lastName: ${this.lastName}, address: ${this.address}, country: ${this.country}, state: ${this.state}, city: ${this.city}, zipCode: ${this.zipCode}, phone: ${this.phone} }`;
    }

}
