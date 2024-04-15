export const BASE_URL = "http://192.168.10.106:3000"

export const AUTH = {
    REGISTER: "/api/v1/auth/register",
    LOGIN: "/api/v1/auth/login",
}

export const USER = {
    GET: "/api/v1/user",
    UPDATE: "/api/v1/user/update",
    UPDATE_AVATAR: "/api/v1/user/update-avatar",
    SELF: "/api/v1/user/self",
    RESET_PASSWORD: '/api/v1/user/reset-password'
}

export const PLACE = {
    CREATE: "/create",
    UPDATE: "/api/v1/place/update",
    DELETE: "/api/v1/place/delete",
    SELF: "/api/v1/place/self",
    LIKE: "/api/vi/place/like",
    UNLIKE: "/api/vi/place/unlike",
    FAVOURITES: "/api/v1/place/favourites",
}

export const REVIEW = {
    CREATE: "/api/v1/review/create",
    UPDATE: "/api/v1/review/update",
    DELETE: "/api/v1/review/delete",
    SELF: "/api/v1/review/self",
    LIKE: "/api/vi/review/like",
    UNLIKE: "/api/vi/review/unlike",
    FAVOURITES: "/api/v1/review/favourites",
    GET_ALL: "api/v1/review/reviews",
    CET_ALL_CREATE_BY: "api/v1/review/reviews/cteate-by",
    GET_All_FOR_PLACE: "api/v1/review/reviews/for-place",
}

export const POST = {
    CREATE: "/api/v1/post/create",
    UPDATE: "/api/v1/post/update",
    DELETE: "/api/v1/post/delete",
    SELF: "/api/v1/post/self",
    LIKE: "/api/vi/post/like",
    UNLIKE: "/api/vi/post/unlike",
    FAVOURITES: "/api/v1/post/favourites",
    GET_ALL: "api/v1/post/posts",
    CET_ALL_CREATE_BY: "api/v1/post/posts/cteate-by",
    GET_All_IN_PLACE: "api/v1/post/posts/in-place",
}

export const COMMENT = {
    CREATE: "/api/v1/comment/create",
    UPDATE: "/api/v1/comment/update",
    DELETE: "/api/v1/comment/delete",
    SELF: "/api/v1/comment/self",
    LIKE: "/api/vi/comment/like",
    UNLIKE: "/api/vi/comment/unlike",
    FAVOURITES: "/api/v1/comment/favourites",
    CET_ALL_CREATE_BY: "api/v1/comment/comments/cteate-by",
    GET_All_IN_POST: "api/v1/comment/comments/in-post",

}

export const IMAGE = {
    RESOURCE: '/api/v1/image/resource'
}

export const WARNING = {
    GET_ALL: '/v1/warning/get-all',
    CHECK: '/v1/warning/check'
}