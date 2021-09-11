/// <reference types="react" />
interface ToggleComponent extends JSX.Element {
    show(): void;
    hide(): void;
    toggle(value: boolean): void;
}
declare type ParamsType = {
    Component: ToggleComponent;
    onOk: Function;
    onCancel: Function;
};
declare type useToggleComReturn = [boolean, {
    onShow: () => void;
    onHide: () => void;
}];
declare const useToggleCom: ({ Component, onOk, onCancel }: ParamsType) => useToggleComReturn;
export default useToggleCom;
