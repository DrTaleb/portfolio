import Icon from "@/utils/Icon";

export default function Input({
  type,
  placeholder,
  iconName,
  iconSize,
  name,
  value,
  readonly = false,
  error = false,
  onChange,
  onTextAreaChange
}: {
  type: string;
  value?: string;
  name: string;
  placeholder: string;
  iconName: string;
  iconSize: number | undefined;
  readonly?: boolean;
  error ? : boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onTextAreaChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
  return (
    <div className={`flex gap-3 border-2 ${error ? "border-red-500" : "border-gray"} rounded-lg items-center`}>
      <i
        className={`w-[40px] flex ${
          type !== "textarea" ? "items-center" : "items-start pt-3"
        } h-full justify-center`}
      >
        <Icon name={iconName} size={iconSize} color={error ? "red" : "gray"}/>
      </i>
      {type !== "textarea" ? (
        <input
          className="w-full h-full outline-none bg-transparent p-3"
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          readOnly={readonly}
          onChange={onChange}
        />
      ) : (
        <textarea
          className="w-full min-h-[150px] outline-none bg-transparent p-3"
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          name={name}
          onChange={onTextAreaChange}
        />
      )}
    </div>
  );
}
