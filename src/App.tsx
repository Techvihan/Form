import { useFormik } from "formik";
import { object, string } from "yup";
function App() {
  const onSubmit = (data: any) => {
    console.log("onsubmit data", data);
  };

  const validationSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(5).max(15),
  });
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema,
  });

  return (
    <div className="h-screen bg-cover bg-hero-pattern">
      <div className="h-screen flex justify-center items-center">
        <form
          className=" border-2 border-gray-500 bg-gray-300 p-6 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              name="email"
              type="email"
              id="email-id"
              placeholder="email"
              autoComplete="email"
              className="w-64 px-2 py-2 border-2 border-indigo-500 rounded-md outline-green-500 cursor-pointer"
            ></input>
            <div className="h-4">
              {errors.email && touched.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              name="password"
              type="password"
              id="id-password"
              placeholder="password"
              autoComplete="password"
              className="w-64 px-2 py-2 border-2 border-indigo-500 rounded-md outline-green-500 cursor-pointer"
            ></input>
            <div className="h-4">
              {errors.password && touched.password && (
                <span className="text-red-500"> {errors.password}</span>
              )}
            </div>
            <div className="flexflex-row space-x-2 mt-4">
              <button
                disabled={!isValid}
                className="disabled:bg-gray-500 disabled:text-black hover:bg-indigo-700 px-4 py-2 bg-indigo-500 text-white rounded-md border-2"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
