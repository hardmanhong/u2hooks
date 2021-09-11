/// <reference types="react" />
interface ToggleComponent extends JSX.Element {
    show(): void;
    hide(): void;
    toggle(value: boolean): void;
}
declare const useToggleComWithPayload: <T>(Component: ToggleComponent, Wrapper: ToggleComponent, defaultPayload: T) => T;
export default useToggleComWithPayload;
