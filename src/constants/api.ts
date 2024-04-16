export const BASE_URL = "http://192.168.10.108:3000/api/v1"

export const AUTH = {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
}

export const USER = {
    GET: "/user",
    UPDATE: "/user/update",
    UPDATE_AVATAR: "/user/update-avatar",
    SELF: "/user/self",
    RESET_PASSWORD: '/user/reset-password'
}

export const PLACE = {
    CREATE: "/place/create",
    UPDATE: "/place/update",
    DELETE: "/place/delete",
    SELF: "/place/self",
    LIKE: "/place/like",
    UNLIKE: "/place/unlike",
    FAVOURITES: "/place/favourites",
}

export const REVIEW = {
    CREATE: "/review/create",
    UPDATE: "/review/update",
    DELETE: "/review/delete",
    SELF: "/review/self",
    LIKE: "/review/like",
    UNLIKE: "/review/unlike",
    FAVOURITES: "/review/favourites",
    GET_ALL: "api/v1/review/reviews",
    CET_ALL_CREATE_BY: "api/v1/review/reviews/cteate-by",
    GET_All_FOR_PLACE: "api/v1/review/reviews/for-place",
}

export const POST = {
    CREATE: "/post/create",
    UPDATE: "/post/update",
    DELETE: "/post/delete",
    SELF: "/post/self",
    LIKE: "/post/like",
    UNLIKE: "/post/unlike",
    FAVOURITES: "/post/favourites",
    GET_ALL: "api/v1/post/posts",
    CET_ALL_CREATE_BY: "api/v1/post/posts/cteate-by",
    GET_All_IN_PLACE: "api/v1/post/posts/in-place",
}

export const COMMENT = {
    CREATE: "/comment/create",
    UPDATE: "/comment/update",
    DELETE: "/comment/delete",
    SELF: "/comment/self",
    LIKE: "/comment/like",
    UNLIKE: "/comment/unlike",
    FAVOURITES: "/comment/favourites",
    CET_ALL_CREATE_BY: "api/v1/comment/comments/cteate-by",
    GET_All_IN_POST: "api/v1/comment/comments/in-post",

}

export const IMAGE = {
    RESOURCE: '/image/resource'
}

export const WARNING = {
    GET_ALL: '/v1/warning/get-all',
    CHECK: '/v1/warning/check'
}