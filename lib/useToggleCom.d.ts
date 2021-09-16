export declare type ToggleComponent = any & {
    show: () => void;
    hide: () => void;
    toggle: (value: boolean) => void;
};
declare type ParamsType = {
    Component: ToggleComponent;
    onOk?: () => void;
    onCancel?: () => void;
};
declare type useToggleComReturn = [boolean, {
    onShow: () => void;
    onHide: () => void;
}];
declare const useToggleCom: ({ Component, onOk, onCancel }: ParamsType) => useToggleComReturn;
export default useToggleCom;
