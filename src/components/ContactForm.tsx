"use client";
import { CONTENT } from "@/content/content";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { object, string } from "yup";
import { convertTextInputToNumber } from "@/utils/convertTextToNumber";
import Icon from "@/utils/Icon";

export default function ContactForm() {
  const form = useRef<any>("");

  const [loading, setLoading] = useState(false);
  const schema = object({
    from_name: string().required(),
    from_mobile: string().required().min(11).max(11),
    message: string().required().min(4).max(200),
    user_email: string().required(),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      from_name: "",
      from_mobile: "",
      message: "",
      user_email: "drtaleb.me@gmail.com",
    },
    onSubmit: () => {
      setLoading(true);
      emailjs
        .sendForm(
          "service_jcargw2",
          "template_yc20vzl",
          form.current,
          "1ewVmMI0wdL0ENV_l"
        )
        .then(
          (result) => {
            setLoading(false);
            if (result?.status === 200) {
              toast.success("پیام ارسال شد.");
              formik.resetForm();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  return (
    <form
      className="grid grid-cols-1 gap-4 px-3 md:px-0 mb-8 md:mb-0"
      ref={form}
      onSubmit={formik.handleSubmit}
    >
      <span className="mt-5 md:ps-2 border-b-2 md:border-b-0 md:border-s-2 text-[20px] border-[rgb(141_96_231)] text-center md:text-start justify-self-center md:justify-self-start">
        فرم تماس
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          name="from_name"
          value={formik.values.from_name}
          error={formik.errors.from_name ? true : false}
          onChange={formik.handleChange}
          iconName="user"
          iconSize={20}
          placeholder="نام خود را وارد کنید"
        />
        <Input
          type="tel"
          name="from_mobile"
          value={formik.values.from_mobile}
          error={formik.errors.from_mobile ? true : false}
          onChange={(e) =>
            convertTextInputToNumber(
              e,
              formik.setFieldValue,
              11,
              "formik",
              "string"
            )
          }
          iconName="phone"
          iconSize={20}
          placeholder="شماره موبایل خود را وارد کنید"
        />
        <div className="hidden">
          <Input
            type="email"
            readonly={true}
            name={"user_email"}
            iconName="phone"
            iconSize={20}
            value="drtaleb.me@gmail.com"
            placeholder=""
          />
        </div>
      </div>
      <Input
        name="message"
        value={formik.values.message}
        error={formik.errors.message ? true : false}
        onTextAreaChange={formik.handleChange}
        type="textarea"
        iconName="comment-outline"
        iconSize={20}
        placeholder="پیام خود را وارد کنید ..."
      />
      <button
        type="submit"
        className="bg-[rgb(141_96_231)] px-3 py-2 rounded-lg text-white md:w-1/3 md:justify-self-end"
      >
        {loading ? <div className="w-full h-full flex items-center justify-center">در حال ارسال ...</div> : CONTENT.SEND_FORM}
      </button>
    </form>
  );
}
