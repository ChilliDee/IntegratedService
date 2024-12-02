import React, { useState } from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { FormField } from "../components/FormField/FormField";
import { useFormOptions } from "../hooks/useFormOptions";
import styles from "./CreditApplicationForm.module.css";
import { AppFormOption } from "../types/dto/appFormOptionDTO";
import { useSubmitApplication } from "../hooks/useSubmitApplication";
import { SubmitButton } from "../components/SubmitButton/SubmitButton";

export default function CreditApplicationForm() {
  const { data: formOptions } = useFormOptions();
  const { mutate: submitApplication, isLoading: isSubmitting } =
    useSubmitApplication();

  const [selectedHelp, setSelectedHelp] = useState<AppFormOption>({
    id: 0,
    name: "",
  });
  const [selectedGoal, setSelectedGoal] = useState<AppFormOption>({
    id: 0,
    name: "",
  });
  const [otherGoal, setOtherGoal] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (isFormValid()) {
      submitApplication(
        {
          primaryConcern: selectedHelp.id,
          goalAfterCreditRepair: selectedGoal.id,
          otherGoal: selectedGoal.id === 7 ? otherGoal : undefined,
          firstName,
          email,
          mobile,
          postCode,
        },
        {
          onSuccess: (response) => {
            console.log("Application submitted successfully:", response);
            // Handle success (e.g., show success message, redirect)
          },
          onError: (error) => {
            console.error("Error submitting application:", error);
            // Handle error (e.g., show error message)
          },
        }
      );
    }
  };

  const isFormValid = () => {
    if (!selectedHelp) return false;
    if (!selectedGoal) return false;
    if (selectedGoal.id === 7 && !otherGoal) return false;
    if (!firstName) return false;
    if (!email) return false;
    if (!mobile) return false;
    if (!postCode) return false;
    return true;
  };

  const showError = (field: string, value: any) => {
    return submitted && !value;
  };

  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-xl text-gray-600">Loading form options...</div>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-xl text-red-600">
  //         Error loading form options. Please try again later.
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Can't get a loan or credit card?</h1>
          <h2 className={styles.subtitle}>
            We provide credit repair solutions
          </h2>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div>
            <Dropdown
              label="How can we help?"
              options={formOptions?.primaryConcernOptions || []}
              value={selectedHelp}
              onChange={setSelectedHelp}
              error={showError("help", selectedHelp)}
            />
          </div>

          <div>
            <Dropdown
              label="What is your goal after credit repair?"
              options={formOptions?.goalsAfterCreditRepairOptions || []}
              value={selectedGoal}
              onChange={setSelectedGoal}
              error={showError("goal", selectedGoal)}
            />
          </div>

          {selectedGoal.id === 7 && (
            <FormField
              label="Please specify your goal"
              type="text"
              value={otherGoal}
              onChange={(e) => setOtherGoal(e.target.value)}
              showLabelAfterValue
              suffixLabel="goal"
              error={showError("otherGoal", otherGoal)}
            />
          )}

          <FormField
            label="First name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            showLabelAfterValue
            suffixLabel="first name"
            error={showError("firstName", firstName)}
          />

          <FormField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showLabelAfterValue
            suffixLabel="email"
            error={showError("email", email)}
          />

          <FormField
            label="Mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            showLabelAfterValue
            suffixLabel="mobile"
            error={showError("mobile", mobile)}
          />

          <FormField
            label="Post Code"
            type="text"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            showLabelAfterValue
            suffixLabel="postcode"
            error={showError("postCode", postCode)}
          />

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
}