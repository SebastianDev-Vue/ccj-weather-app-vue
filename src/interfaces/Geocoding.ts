export interface Geocoding {
  data: GeocodingData[]
  status: number
  statusText: string
  headers: GeocodingDataHeaders
  config: Config
  request: Request
}

export interface GeocodingData {
  name: string
  local_names: { [key: string]: string }
  lat: number
  lon: number
  country: string
}

export interface Config {
  transitional: Transitional
  adapter: string[]
  transformRequest: null[]
  transformResponse: null[]
  timeout: number
  xsrfCookieName: string
  xsrfHeaderName: string
  maxContentLength: number
  maxBodyLength: number
  env: Request
  headers: ConfigHeaders
  url: string
  method: string
}

export interface Request {}

export interface ConfigHeaders {
  Accept: string
}

export interface Transitional {
  silentJSONParsing: boolean
  forcedJSONParsing: boolean
  clarifyTimeoutError: boolean
}

export interface GeocodingDataHeaders {
  'content-length': string
  'content-type': string
}
