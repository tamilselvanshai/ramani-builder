import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_mabwc3q",
        "template_tjw3n5c",
        form.current,
        "mywnIHUCVQFv6yOJA"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Failed to send enquiry.");
      });
  };

  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center font-semibold">
          CONTACT US
        </p>

        <h2 className="text-5xl font-bold text-white text-center mt-4">
          Let's Build Your Dream Project
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Contact Information */}
          <div>

            <h3 className="text-3xl font-bold text-white mb-8">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="text-yellow-400 font-semibold">📞 Phone</h4>
                <p className="text-gray-300 mt-2">
                  +91 9789796218
                  <br />
                  +91 9751858332
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="text-yellow-400 font-semibold">📧 Email</h4>
                <p className="text-gray-300 mt-2">
                  tamilselvanshai@gmail.com
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-xl">
                <h4 className="text-yellow-400 font-semibold">📍 Location</h4>
                <p className="text-gray-300 mt-2">
                  Salem, Tamil Nadu
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8">

            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              Request a Quote
            </h3>

            {success && (
              <div className="mb-6 rounded-lg border border-green-500 bg-green-100 p-4 text-green-700">
                <h4 className="font-bold text-lg">
                  ✅ Enquiry Sent Successfully!
                </h4>

                <p className="mt-2">
                  Thank you for contacting <strong>RAMANI BUILDER</strong>.
                </p>

                <p>
                  We have received your enquiry and will contact you shortly.
                </p>
              </div>
            )}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  required
  pattern="[6-9]{1}[0-9]{9}"
  maxLength="10"
  title="Please enter a valid 10-digit Indian mobile number"
  className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
/>

              <select
  name="project_type"
  required
  defaultValue=""
  className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
>
  <option value="" disabled>
    Select Project Type
  </option>

  <option value="Individual House Construction">
    Individual House Construction
  </option>

  <option value="Apartment Construction">
    Apartment Construction
  </option>

  <option value="Booked House Construction">
    Booked House Construction
  </option>

  <option value="Engineering Services">
    Engineering Services
  </option>

  <option value="Real Estate">
    Real Estate
  </option>

  <option value="Construction Loan Assistance">
    Construction Loan Assistance
  </option>
</select>

              <input
                type="text"
                name="budget"
                placeholder="Estimated Budget"
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <input
                type="text"
                name="location"
                placeholder="Project Location"
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your project..."
                required
                className="w-full border rounded-lg p-4 outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;