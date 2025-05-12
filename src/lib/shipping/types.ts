/**
 * Shipping system type definitions
 * These types define the structure for the multi-carrier shipping system
 * supporting Correios (Brazil), UPS (USA), and DHL (Europe)
 */

/**
 * Represents a shipping address with postal information
 */
export interface ShippingAddress {
    postalCode: string
    state?: string
    city?: string
    street?: string
    country?: string
    name?: string
    email?: string
    phone?: string
}

/**
 * Represents the physical characteristics of a package
 */
export interface PackageDetails {
    weight: number // in grams
    length?: number // in cm
    width?: number // in cm
    height?: number // in cm
    value?: number // declared value in currency
    currency?: string // currency code (default: BRL)
    description?: string
    isFragile?: boolean
}

/**
 * Represents a shipping service option returned by a carrier
 */
export interface ShippingOption {
    id: string
    carrierId: string // Should be required for consistency
    carrierName: string // Should be required for consistency
    serviceName: string
    serviceCode: string
    price: number
    currency: string // Should be required for consistency
    estimatedDays: number
    estimatedDeliveryDate?: Date
    trackingAvailable: boolean // Should be required with default value
    guaranteedDelivery?: boolean
    insuranceIncluded?: boolean
    insuranceAmount?: number
}

/**
 * Represents an error returned by a shipping carrier
 */
export interface ShippingError {
    code: string
    message: string
    carrier?: string
    details?: Record<string, unknown>
}

/**
 * Represents the result of a shipping rate calculation
 */
export interface ShippingResult {
    success: boolean
    options?: ShippingOption[]
    error?: ShippingError
    requestId?: string
    timestamp?: number
}

/**
 * Base configuration interface for all carriers
 */
export interface BaseCarrierConfig {
    enabled: boolean
}

/**
 * Configuration for Correios (Brazilian postal service)
 */
export interface CorreiosConfig extends BaseCarrierConfig {
    username?: string
    password?: string
    companyCode?: string
    companyPassword?: string
    useContractPrices?: boolean
    defaultServices?: string[] // Array of service codes to use by default
}

/**
 * Configuration for UPS
 */
export interface UPSConfig extends BaseCarrierConfig {
    apiKey: string
    username: string
    password: string
    accountNumber: string
    useSandbox?: boolean
    defaultServices?: string[] // Array of service codes to use by default
}

/**
 * Configuration for DHL
 */
export interface DHLConfig extends BaseCarrierConfig {
    apiKey: string
    accountNumber: string
    useSandbox?: boolean
    defaultServices?: string[] // Array of service codes to use by default
}

/**
 * Complete shipping configuration for all carriers
 */
export interface ShippingConfig {
    correios: CorreiosConfig
    ups: UPSConfig
    dhl: DHLConfig
    defaultOrigin?: ShippingAddress
    defaultPackageDetails?: Partial<PackageDetails>
}

/**
 * Supported shipping regions
 */
export type Region = "brazil" | "usa" | "europe" | "other"

/**
 * Shipping carrier identifiers
 */
export type CarrierId = "correios" | "ups" | "dhl"

/**
 * Common service codes for reference
 */
export const CORREIOS_SERVICES = {
    PAC: "04510",
    SEDEX: "04014",
    SEDEX_10: "04790",
    SEDEX_12: "04782",
    SEDEX_HOJE: "04804",
} as const

export const UPS_SERVICES = {
    GROUND: "03",
    THREE_DAY_SELECT: "12",
    SECOND_DAY_AIR: "02",
    NEXT_DAY_AIR: "01",
} as const

export const DHL_SERVICES = {
    EXPRESS_WORLDWIDE: "P",
    EXPRESS_12: "T",
    ECONOMY_SELECT: "E",
} as const
