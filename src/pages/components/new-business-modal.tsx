import { CustomFlowbiteTheme, Flowbite, Modal } from "flowbite-react";
import Icons from "../../assets/icons/icons";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../store/client";
import { useShallow } from "zustand/react/shallow";

type AddBusinessModalProps = {
  open: boolean;
  onClose: () => void;
};

const customTheme: CustomFlowbiteTheme = {
  modal: {
    root: {
      base: "fixed top-0 right-0 left-0 z-50 overflow-x-hidden md:inset-0  md:h-full backdrop-blur-sm ",
      sizes: {
        "2xl": "mt-[100px] max-w-[100%] outline-none",
      },
    },
    content: {
      inner:
        "relative rounded-[10px] p-3 bg-white max-h-[100vh] overflow-auto shadow dark:bg-gray-700 flex flex-col",
    },
  },
};

const AddBusinessModal = ({ open, onClose }: AddBusinessModalProps) => {
  const [selectAccountType, setSelectAccountType] = useState<boolean>(false);

  const { businesses } = useAuthStore(
    useShallow((state) => ({
      businesses: state.businesses,
      currentBusiness: state.currentBusiness,
    }))
  );

  const setCurrentBusiness = useAuthStore((state) => state.setCurrentBusiness);
  const setBusinesses = useAuthStore((state) => state.setBusinesses);

  const initialValues = {
    businessLocation: "",
    businessName: "",
    businessIndustry: "",
    companySize: "",
    estimatedVol: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnMount: false,
    validationSchema: Yup.object().shape({
      businessLocation: Yup.string().required("This field is required"),
      businessName: Yup.string().required("This field is required"),
      businessIndustry: Yup.string().required("This field is required"),
      companySize: Yup.string().required("This field is required"),
      estimatedVol: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      const business = [...businesses, formik?.values?.businessName];
      setBusinesses(business);
      setCurrentBusiness(formik?.values?.businessName);
      setSelectAccountType(false);
      formik?.resetForm();
      setSubmitting(false);
      onClose();
    },
  });
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Modal
          show={open}
          size="2xl"
          popup
          onClose={() => {
            setSelectAccountType(false);
            formik?.resetForm();
            onClose();
          }}
        >
          <Modal.Header className="[&>button]:outline-none">
            <p className="flex gap-2 items-center font-OjahDisplayBlack text-20 leading-6 font-normal text-[#313130]">
              <span className="border-r pr-2">
                <Icons.AddBusinessIcon />
              </span>{" "}
              Add a Business
            </p>
          </Modal.Header>
          <Modal.Body className="flex items-center justify-center p-[30px]">
            {selectAccountType === false ? (
              <div className="flex flex-col gap-[32px] justify-center w-[440px]">
                <div className="w-full flex flex-col gap-4 text-left items-start">
                  <p className="flex gap-2 items-center text-wrap font-OjahDisplayBlack text-32 leading-9 font-normal text-[#313130]">
                    What kind of account do you want to open?
                  </p>
                  <p className="text-14 leading-4 text-[#99999C]">
                    You can always add another account later on.
                  </p>
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                  <div
                    onClick={() => setSelectAccountType(true)}
                    className="w-full cursor-pointer flex gap-3 items-center justify-between border border-[#E2E3E5] p-4 bg-white rounded-[12px]"
                  >
                    <div>
                      <Icons.MerchantAccountIcon />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-16 overflow-hidden whitespace-wrap text-[#343433] font-bold leading-5 tracking-tighter">
                        Merchant Account
                      </p>
                      <p className="text-12 text-[#6F6F6F] overflow-hidden whitespace-wrap font-normal leading-5 tracking-tighter">
                        I want to pay suppliers and receive payment from buyers
                        across the globe.
                      </p>
                    </div>
                    <div className="cursor-pointer">
                      <Icons.ArrowRightIcon />
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectAccountType(true)}
                    className="w-full cursor-pointer flex gap-4 items-center justify-between border border-[#E2E3E5] p-4 bg-white rounded-[12px]"
                  >
                    <Icons.AgentAccountIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-16 overflow-hidden whitespace-wrap text-[#343433] font-bold leading-5 tracking-tighter">
                        Agent Account
                      </p>
                      <p className="text-12 text-[#6F6F6F] overflow-hidden whitespace-wrap font-normal leading-5 tracking-tighter">
                        I want to help clients with global flights, hotels,
                        tuition payments & accommodation.
                      </p>
                    </div>
                    <div className="cursor-pointer">
                      <Icons.ArrowRightIcon />
                    </div>
                  </div>
                  <div
                    onClick={() => setSelectAccountType(true)}
                    className="w-full cursor-pointer flex gap-4 items-center justify-between border border-[#E2E3E5] p-4 bg-white rounded-[12px]"
                  >
                    <Icons.ExportingAccountIcon />
                    <div className="flex flex-col gap-1">
                      <p className="text-16 overflow-hidden whitespace-wrap text-[#343433] font-bold leading-5 tracking-tighter">
                        An Exporting Producer
                      </p>
                      <p className="text-12 text-[#6F6F6F] overflow-hidden whitespace-wrap font-normal leading-5 tracking-tighter">
                        I want to export finished goods from Africa to a global
                        audience using Ojah by Shiga.
                      </p>
                    </div>
                    <div className="cursor-pointer">
                      <Icons.ArrowRightIcon />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-[32px] justify-center w-[440px]">
                <div className="w-full flex flex-col gap-4 text-left items-start">
                  <p className="flex gap-2 items-center text-wrap font-OjahDisplayBlack text-32 leading-9 font-normal text-[#313130]">
                    Provide some info about your business
                  </p>
                </div>
                <form
                  autoComplete="off"
                  onSubmit={formik?.handleSubmit}
                  className="w-full flex flex-col gap-4 items-start"
                >
                  {/* <pre>{JSON.stringify(formik?.errors, null, 2)}</pre> */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex gap-1 items-start text-14 text-[#B4B4B4] leading-5 font-normal">
                      Where is your business located{" "}
                      <span className="text-[#FF4E4E]">*</span>
                    </label>
                    <select
                      value={formik?.values?.businessLocation}
                      onChange={(e) => {
                        formik?.setFieldValue(
                          "businessLocation",
                          e.target.value
                        );
                      }}
                      className="p-3 bg-[#FAFAFB] border-0 text-[#313130] text-14 rounded-[8px] outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-[#B4B4B4]"
                    >
                      <option selected hidden>
                        Select Location
                      </option>
                      <option className="flex gap-1 items-center">
                        <Icons.NaijaIcon />
                        Nigeria
                      </option>
                      <option className="flex gap-1 items-center">
                        <Icons.WorldIcon />
                        Other Countries
                      </option>
                    </select>
                    {formik.touched.businessLocation &&
                    Boolean(formik.errors.businessLocation) ? (
                      <p className="text-12 text-red-600 font-medium mt-[-5px]">
                        {formik.errors.businessLocation}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex gap-1 items-start text-14 text-[#B4B4B4] leading-5 font-normal">
                      What is your business name?
                      <span className="text-[#FF4E4E]">*</span>
                    </label>
                    <input
                      placeholder="Business Name"
                      value={formik?.values?.businessName}
                      onChange={(e) => {
                        formik?.setFieldValue("businessName", e.target.value);
                      }}
                      className="p-3 bg-[#FAFAFB] border-0 text-[#313130] text-14 rounded-[8px outline-none ring-0 focus:outline-none focus:ring-0"
                    />
                    <p className="flex gap-1 self-end items-start text-13 text-right text-[#99999C] leading-5 font-normal">
                      Use the registered business name on your document
                    </p>
                    {formik.touched.businessName &&
                    Boolean(formik.errors.businessName) ? (
                      <p className="text-12 text-red-600 font-medium mt-[-5px]">
                        {formik.errors.businessName}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="flex gap-1 items-start text-14 text-[#B4B4B4] leading-5 font-normal">
                      Business Industry{" "}
                      <span className="text-[#FF4E4E]">*</span>
                    </label>
                    <select
                      value={formik?.values?.businessIndustry}
                      onChange={(e) => {
                        formik?.setFieldValue(
                          "businessIndustry",
                          e.target.value
                        );
                      }}
                      className="p-3 bg-[#FAFAFB] border-0 text-[#313130] text-14 rounded-[8px] outline-none ring-0 focus:outline-none focus:ring-0"
                    >
                      <option selected hidden>
                        Select Industry
                      </option>
                      <option>Financial Technology</option>
                      <option>Ecommerce</option>
                    </select>
                    {formik.touched.businessIndustry &&
                    Boolean(formik.errors.businessIndustry) ? (
                      <p className="text-12 text-red-600 font-medium mt-[-5px]">
                        {formik.errors.businessIndustry}
                      </p>
                    ) : null}
                  </div>
                  <div className="w-full flex gap-3 items-center justify-between">
                    <div className="flex flex-col gap-2 w-[50%]">
                      <label className="flex gap-2 items-start text-14 text-[#B4B4B4] leading-5 font-normal">
                        Company Size <span className="text-[#FF4E4E]">*</span>
                      </label>
                      <select
                        value={formik?.values?.companySize}
                        onChange={(e) => {
                          formik?.setFieldValue("companySize", e.target.value);
                        }}
                        className="p-3 bg-[#FAFAFB] border-0 text-[#313130] text-14 rounded-[8px] outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-[#B4B4B4]"
                      >
                        <option selected hidden>
                          Select a size
                        </option>
                        <option>1-100</option>
                        <option>101-200</option>
                      </select>
                      {formik.touched.companySize &&
                      Boolean(formik.errors.companySize) ? (
                        <p className="text-12 text-red-600 font-medium mt-[-5px]">
                          {formik.errors.companySize}
                        </p>
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-2 w-[50%]">
                      <label className="flex gap-1 items-start text-14 text-[#B4B4B4] leading-5 font-normal">
                        Estimated Annual Volume{" "}
                        <span className="text-[#FF4E4E]">*</span>
                      </label>
                      <select
                        value={formik?.values?.estimatedVol}
                        onChange={(e) => {
                          formik?.setFieldValue("estimatedVol", e.target.value);
                        }}
                        className="p-3 bg-[#FAFAFB] border-0 text-[#313130] text-14 rounded-[8px] outline-none ring-0 focus:outline-none focus:ring-0 placeholder:text-[#B4B4B4]"
                      >
                        <option selected hidden>
                          Select an option
                        </option>
                        <option>$1,000 - $10,000</option>
                        <option>$10,001 - $50,000</option>
                      </select>
                      {formik.touched.estimatedVol &&
                      Boolean(formik.errors.estimatedVol) ? (
                        <p className="text-12 text-red-600 font-medium mt-[-5px]">
                          {formik.errors.estimatedVol}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectAccountType(false);
                        formik?.resetForm();
                      }}
                      className="flex gap-1 items-center bg-[#fff] border border-[#E2E3E5] py-2 px-3 rounded-[12px] text-16 leading-5 font-semibold text-[#343433]"
                    >
                      <Icons.BackIcon />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formik?.isValid ? true : false}
                      className="bg-[#343433] py-2 px-4 rounded-[12px] text-18 leading-6 font-semibold text-white disabled:bg-[#adadad]"
                    >
                      Create Business
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Flowbite>
    </>
  );
};

export default AddBusinessModal;
