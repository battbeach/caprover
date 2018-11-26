import DataStore = require('../datastore/DataStoreImpl')
import ServiceManager = require('../user/ServiceManager')

export interface UserJwt {
    namespace: string
    tokenVersion: string
}

export interface UserInjected extends UserJwt {
    dataStore: DataStore
    serviceManager: ServiceManager
    initialized: boolean
}

export interface IAppWebHookToken {
    appName: string
    tokenVersion: string
}