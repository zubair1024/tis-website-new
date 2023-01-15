import { IContactDetails } from "@/utils/types";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";

interface IContactFormValues {
  firstName: string;
  lastName: string;
  contactNumber: string;
  companyName: string;
  message: string;
}

const sendMessage = (contactDetails: IContactDetails) => {
  return axios.post("/contact", contactDetails);
};

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IContactFormValues>();

  const onSubmit: SubmitHandler<IContactFormValues> = async ({
    firstName,
    lastName,
    contactNumber,
    message,
  }) => {
    await sendMessage({ firstName, lastName, contactNumber, message });
  };

  return (
    <>
      <h2 className="py-2 font-thin tracking-tighter text-left font-lato">
        Send Us A Message
      </h2>
      <form className="flex flex-col space-y-4 min-w-sm md:min-w-[400px]">
        <div className="w-full border-[0.5px] p-1  rounded-lg border-1">
          <input
            type={"text"}
            placeholder={"First Name"}
            {...register("firstName", {
              required: "Please enter your first name.",
            })}
            className="w-full h-full p-2"
          ></input>
        </div>
        <div className="text-[red]  text-left">
          {errors?.firstName?.message && <p>{errors.firstName.message}</p>}
        </div>
        <div className="w-full border-[0.5px] p-1  rounded-lg ">
          <input
            type={"text"}
            placeholder={"Last Name"}
            {...register("lastName", {
              required: "Please enter your last name.",
            })}
            className="w-full h-full p-2"
          ></input>
        </div>
        <div className="text-[red] text-left">
          {errors?.lastName?.message ?? <p>{errors?.lastName?.message}</p>}
        </div>
        <div className="w-full border-[0.5px] p-1   rounded-lg ">
          <input
            type={"text"}
            placeholder={"Contact Number"}
            {...register("contactNumber", {
              required: true,
            })}
            className="w-full h-full p-2"
          ></input>
        </div>
        <div className="text-[red] text-left">
          {errors?.contactNumber?.message ?? (
            <p>{errors?.contactNumber?.message}</p>
          )}
        </div>
        <div className="w-full border-[0.5px] p-1  rounded-lg ">
          <textarea
            placeholder={"Write a message"}
            {...register("message", {
              required: "Please enter a short message",
            })}
            className="w-full h-full"
            rows={6}
          ></textarea>
        </div>
        <div className="text-[red] text-left">
          {errors?.message?.message ?? <p>{errors?.message?.message}</p>}
        </div>
        <div className="flex">
          <button
            onClick={handleSubmit(onSubmit)}
            className="p-3 border shadow-lg hover:scale-105 hover:transition hover:ease-in rounded-xl "
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

const ContactUs = () => {
  return (
    <>
      <div
        id="contact-us"
        className="flex flex-col items-center justify-center py-10 bg-[#393738] text-[#fff]"
      >
        <div className="text-center">
          <h1 className="text-2xl">Contact Us</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex flex-col md:flex-row w-full p-6 my-6 space-y-6 md:space-y-0 md:space-x-10 rounded-lg shadow-lg bg-[#fff] text-[#000]">
            {/* left */}
            <div className="">
              <ContactForm />
            </div>
            {/* right */}
            <div className="flex flex-col md:space-y-3 text-sm text-left md:border-l-[0.5px] md:pl-4 font-lato">
              <div>
                <p>Address</p>
                <p className="font-thin">
                  Office 736, Tamani Arts Tower, Business Bay Dubai <br /> P.O.
                  Box 393062
                </p>
              </div>
              <div>
                <p>Email</p>
                <p className="font-thin">
                  <a href="mailto:rz@tisgulf.com">rz@tisgulf.com</a>
                </p>
              </div>
              <div>
                <p>Contact Number</p>
                <p className="font-thin">
                  <a href="tel:+971 55 780 6050">+971 55 780 6050</a>{" "}
                </p>
              </div>
              <div>
                <p>Alternate Number</p>
                <p className="font-thin">
                  <a href="tel:+971 4 401 8784 ">+971 4 401 8784</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
