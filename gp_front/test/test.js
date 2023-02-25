const staff_sign = {
    data:[
        {
            id: "1",
            staff_id: "abc123",
            name: "刘一",
            profile_img: "./profile.png",
            phone: "12345678912",
            email: "abc@yeat.net",
            password: "aBc123,",
            status: "on",
            sign_in_at: "2023-02-23-13:15:38",
            sign_out_at: "2023-02-23-12:15:38",
        },
        {
            id: "2",
            staff_id: "abc123",
            name: "陈二",
            profile_img: "./profile.png",
            phone: "12345678912",
            email: "abc@yeat.net",
            password: "aBc123,",
            status: "on",
            sign_in_at: "2023-02-23-13:15:38",
            sign_out_at: "2023-02-23-12:15:38",
        }
    ],
    meta: {
        status: 2000,  /*必须，表示本次处理是否成功，与网络状态无关*/
        message: "OK", /*必须，失败时简单写明原因*/
        /* success error 必须二选一 */
        success: {
            name: "成功",
            details: {}
        },
        error: {
            name: "失败",
            details: {}
        },
        /* 非必须 */
        pagination: {
            page: 1,
            pageRows: 10,
            totalRows: 100
        }
    },
}

const regCode = {
    meta: {
        status: 2000,
        message: "OK", /*必须，失败时简单写明原因*/
        /* success error 必须二选一 */
        success: {
            name: "成功",
            details: {}
        },
        error: {
            name: "失败",
            details: {}
        },
    },
}