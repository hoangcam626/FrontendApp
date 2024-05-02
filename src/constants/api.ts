export const BASE_URL = "http://192.168.10.100:3000/api/v1"

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
    PLACES: "/place/places",
    SEARCH: "/place/search",
    RATING:"/place/rating",
    PLACES_CODE:"/place/places/code",
    IMAGES: "/place-image/images"
}

export const REVIEW = {
    CREATE: "/review/create",
    UPDATE: "/review/update",
    DELETE: "/review/delete",
    SELF: "/review/self",
    LIKE: "/review/like",
    UNLIKE: "/review/unlike",
    FAVOURITES: "/review/favourites",
    GET_ALL: "/review/reviews",
    GET_ALL_CREATE_BY: "/review/reviews/create-by",
    GET_All_FOR_PLACE: "/review/reviews/for-place",
}

export const POST = {
    CREATE: "/post/create",
    UPDATE: "/post/update",
    DELETE: "/post/delete",
    SELF: "/post/self",
    LIKE: "/post/like",
    UNLIKE: "/post/unlike",
    FAVOURITES: "/post/favourites",
    GET_ALL: "/post/posts",
    GET_ALL_CREATE_BY: "/post/posts/create-by",
    GET_All_IN_PLACE: "/post/posts/in-place",
}

export const COMMENT = {
    CREATE: "/comment/create",
    UPDATE: "/comment/update",
    DELETE: "/comment/delete",
    SELF: "/comment/self",
    LIKE: "/comment/like",
    UNLIKE: "/comment/unlike",
    FAVOURITES: "/comment/favourites",
    GET_ALL_CREATE_BY: "/comment/comments/create-by",
    GET_All_IN_POST: "/comment/comments/in-post",
    GET_SUB_COMMENTS: "/comment/comments/sub-comment",
}
export const SCHEDULE = {
    CREATE: "/schedule-trip/create",
    UPDATE: "/schedule-trip/update",
    DELETE: "/schedule-trip/delete",
    SELF: "/schedule-trip/self",
    GET_All_MY_SCHEDULE: "/schedule-trip/my-schedules",
    // GET_ALL_CREATE_BY: "/schedule/schedules/create-by",
    // GET_SUB_COMMENTS: "/schedule/schedules/sub-comment",
}
export const PLACE_SCHEDULE = {
    CREATE: "/on-schedule/create",
    UPDATE: "/on-schedule/update",
    DELETE: "/on-schedule/delete",
    SELF: "/on-schedule/self",
    GET_ON_DATE: "/on-schedule/on-date",
    IS_COMPLETE: "/on-schedule/is-complete",
}
// export const PLACE_SCHEDULE = {
//     CREATE: "/on-schedule/create",
//     UPDATE: "/on-schedule/update",
//     DELETE: "/on-schedule/delete",
//     SELF: "/on-schedule/self",
//     IS_COMPLETE: "/on-schedule/is-complete",
//     ON_DATE: "/on-schedule/on-date"
// }

export const VISIT = {
    CREATE: "/visit/create",
    DELETE: "/visit/delete",
    MY_VISIT: "/visit/my_visit"
}


export const IMAGE = {
    RESOURCE: '/image/resource?imageId='
}

export const WARNING = {
    GET_ALL: '/v1/warning/get-all',
    CHECK: '/v1/warning/check'
}