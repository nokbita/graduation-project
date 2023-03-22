import React from 'react';

const DialogContext = React.createContext(
    {
        title: "对话框",
        description: "确认xxx吗？该操作不可逆！",
        cancelName: "取消",
        confirmName: "确认",
        cancel: () => {},
        confirm: () => {}
    }
);

export default DialogContext;