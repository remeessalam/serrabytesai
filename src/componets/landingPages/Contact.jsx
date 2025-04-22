import React, { useContext } from "react";
import { SpinnerContext } from "../SpinnerContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { companyDetails } from "../../constant";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone Number: " + values.phone + "\n\n";
    emailBody += "Budget Range: " + values.budget + "\n\n";
    emailBody += "Selected Package: " + values.package + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: values.subject,
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thankyou");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <section
      id="contact"
      className="py-[5rem] text-white bg-gradient-to-r from-secondary/50 to-primary/50"
    >
      <div className="wrapper">
        <div className="h-full grid md:grid-cols-2 gap-10 py-10">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <h2 className="heading-2">Get In Touch With Us!</h2>
            <p className="desc">
              Connect with us to discuss how computer vision can transform your
              business. Schedule a consultation today.
            </p>
          </div>
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex flex-col gap-4 md:px-[1rem]"
          >
            <div className="">
              <input
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full name is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Full name is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.name?.message}</small>
            </div>
            <div className="">
              <input
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Entered email is invalid",
                  },
                })}
              />
              <small className="text-red-400">{errors.email?.message}</small>
            </div>
            <div className="">
              <input
                type="tel"
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                placeholder="Phone Number"
                inputMode="numeric"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              <small className="text-red-400">{errors.phone?.message}</small>
            </div>
            <div className="">
              <input
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                type="text"
                placeholder="Subject"
                {...register("subject", {
                  required: "Subject is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Subject is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.subject?.message}</small>
            </div>
            <div className="">
              <textarea
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                rows="4"
                placeholder="Message"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.message?.message}</small>
            </div>
            {/* Budget Range Field */}
            <div className="">
              <input
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                type="text"
                placeholder="Budget Range (e.g. $500 - $1000)"
                {...register("budget", {
                  required: "Budget range is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Budget range is required";
                    }
                  },
                })}
              />
              <small className="text-red-400">{errors.budget?.message}</small>
            </div>
            <div className="">
              <select
                className="w-full bg-transparent outline-none border rounded-sm font-light border-white/40 px-2 py-3"
                {...register("package", {
                  required: "Please select a package",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Package
                </option>
                <option value="basic">
                  Basic Package - $399 (8 pages, SEO, feature1, feature2)
                </option>
                <option value="intermediate">
                  Intermediate Package - $999 (1 project, analytics, insights
                  panel, share features)
                </option>
                <option value="advance">
                  Advance Package - $1499 (1 project, analytics, insights panel,
                  share features)
                </option>
              </select>
              <small className="text-red-400">{errors.package?.message}</small>
            </div>

            <button
              disabled={isSubmitting}
              className="primary-btn"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
