
# eFakture service

Jednostavan localhost api za slanje faktura servisu Moj-eRacun.

## API Reference

#### Posalji fakturu

```http
  POST /eracun/invoice
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. Your username (Moj-eRacun username) |
| `Password` | `string` | **Required**. Your password (Moj-eRacun password) |
| `CompanyId` | `string` | **Required**. Your CompanyId (PIB) |
| `SoftwareId` | `string` | **Required**. Your SoftwareId (Moj-eRacun SoftwareId) |
| `File` | `string` | **Required**. Your esacepd xml file |
| `apikey` | `string` | Send your apikey in headers - not Required |

#### Posalji Demo Fakturu

```http
  POST /eracun/demo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. Your username (Moj-eRacun username) |
| `Password` | `string` | **Required**. Your password (Moj-eRacun password) |
| `CompanyId` | `string` | **Required**. Your CompanyId (PIB) |
| `SoftwareId` | `string` | **Required**. Your SoftwareId (Moj-eRacun SoftwareId) |
| `File` | `string` | **Required**. Your esacepd xml file |
| `apikey` | `string` | Send your apikey in headers - not Required |

#### Proveri status demo fakture

```http
  POST /eracun/demoStatus
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. Your username (Moj-eRacun username) |
| `Password` | `string` | **Required**. Your password (Moj-eRacun password) |
| `CompanyId` | `string` | **Required**. Your CompanyId (PIB) |
| `SoftwareId` | `string` | **Required**. Your SoftwareId (Moj-eRacun SoftwareId) |
| `ElectronicId` | `string` | **Required**. Your ElectronicId (saved when you sent the invoice) |
| `apikey` | `string` | Send your apikey in headers - not Required |


#### Proveri status Fakture

```http
  POST /eracun/getStatus
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. Your username (Moj-eRacun username) |
| `Password` | `string` | **Required**. Your password (Moj-eRacun password) |
| `CompanyId` | `string` | **Required**. Your CompanyId (PIB) |
| `SoftwareId` | `string` | **Required**. Your SoftwareId (Moj-eRacun SoftwareId) |
| `ElectronicId` | `string` | **Required**. Your ElectronicId (saved when you sent the invoice) |
| `apikey` | `string` | Send your apikey in headers - not Required |
#### Get item

## Used By

This project is used by the following companies:

- **BKCSOFT**


## Run Locally

Clone the project

```bash
  git clone https://github.com/kamberk/eFakture_service.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Or just run the .exe file and the server will be ready to use
