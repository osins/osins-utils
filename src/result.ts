export interface Result<T> {
    success: boolean
    reason?: string
    code?: number
    data?: T
}

export const response = <T>(result: any): Result<T> => {
    return result.data as Result<T>
}

export const fail = <T>(reason: string): Result<T> => {
    return {
        success: false,
        reason: reason
    }
}

export const success = <T>(reason?: string, data?: T): Result<T> => {
    return {
        success: true,
        reason: reason,
        data: data
    }
}