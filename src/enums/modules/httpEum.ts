export enum RequestEnum {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE"
}

export enum ResultEnum {
  SUCCESS = 200,
  AUTHLOGIC = 401,
  FORBIDDEN = 403,
  ERROR = -1,
  TIMEOUT = 10042,
  TYPE = "success"
}

export enum ContentTypeEnum {
  JSON = "application/json;charset=UTF-8",
  // json
  TEXT = "text/plain;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8"
}
