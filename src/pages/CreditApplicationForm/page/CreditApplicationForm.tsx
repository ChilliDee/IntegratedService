import React, { useState } from "react";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { FormField } from "../components/FormField/FormField";
import { useFormOptions } from "../hooks/useFormOptions";
import styles from "./CreditApplicationForm.module.css";
import { AppFormOption } from "../types/dto/appFormOptionDTO";
import { useSubmitApplication } from "../hooks/useSubmitApplication";
import { SubmitButton } from "../components/SubmitButton/SubmitButton";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { SuccessMessage } from "../components/SuccessMessage/SuccessMessage";
import { formatNumber } from "../utilities/formatNumber";
import ChildIframeResizer from "../../../IframeScripts/childIframeScript";

export default function CreditApplicationForm() {
  const { data: formOptions } = useFormOptions();
  const { mutate: submitApplication, isLoading: isSubmitting } =
    useSubmitApplication();

  var iframeResizer = new ChildIframeResizer();
  iframeResizer.subscribeToDimensionResize();

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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [debtAmount, setDebtAmount] = useState<string>("");

  const selectedGoalsToShowLoanAndDebtAmount: number[] = [1, 2, 3, 4, 5];

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
          onSuccess: () => {
            setIsSuccess(true);
            // Handle success (e.g., show success message, redirect)
          },
          onError: () => {
            setIsFailure(true); // Handle error (e.g., show error message)
          },
        }
      );
    }
  };

  const isFormValid = () => {
    if (selectedHelp.id == 0) return false;
    if (selectedGoal.id == 0) return false;
    if (selectedGoal.id === 7 && !otherGoal) return false;
    if (!firstName) return false;
    if (!email) return false;
    if (!mobile) return false;
    if (!postCode) return false;
    if (!loanAmount) return false;
    if (!debtAmount) return false;
    return true;
  };

  const showGenericError = (value: any) => {
    return submitted && !value;
  };

  const showOptionError = (value: AppFormOption) => {
    return submitted && value.id == 0;
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

  if (isFailure) {
    return (
      <div className={styles.container}>
        <ErrorMessage
          onRetry={() => {
            setIsFailure(false);
            setSubmitted(false);
          }}
        />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <SuccessMessage />
      </div>
    );
  }

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
              error={showOptionError(selectedHelp)}
            />
          </div>

          <div>
            <Dropdown
              label="What is your goal after credit repair?"
              options={formOptions?.goalsAfterCreditRepair || []}
              value={selectedGoal}
              onChange={setSelectedGoal}
              error={showOptionError(selectedGoal)}
            />
          </div>

          {selectedGoal.id === 7 && (
            <FormField
              label="Please specify your goal"
              type="text"
              value={otherGoal}
              onChange={(e) => setOtherGoal(e.target.value)}
              showLabelAfterValue
              suffixLabel="Goal"
              error={showGenericError(otherGoal)}
            />
          )}

          {selectedGoalsToShowLoanAndDebtAmount.includes(selectedGoal.id) && (
            <FormField
              label="How much do you want to borrow?"
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(formatNumber(e.target.value))}
              showLabelAfterValue
              suffixLabel="Loan Amount"
              error={showGenericError(loanAmount)}
            />
          )}

          {selectedGoalsToShowLoanAndDebtAmount.includes(selectedGoal.id) &&
            loanAmount != "" && (
              <FormField
                label="How much debt do you have?"
                type="text"
                value={debtAmount}
                onChange={(e) => setDebtAmount(formatNumber(e.target.value))}
                showLabelAfterValue
                suffixLabel="Debt Amount"
                error={showGenericError(debtAmount)}
              />
            )}

          <FormField
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            showLabelAfterValue
            suffixLabel="First Name"
            error={showGenericError(firstName)}
          />

          <FormField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            showLabelAfterValue
            suffixLabel="Email"
            error={showGenericError(email)}
          />

          <FormField
            label="Mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            showLabelAfterValue
            suffixLabel="Mobile"
            error={showGenericError(mobile)}
          />

          <FormField
            label="Postcode"
            type="text"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            showLabelAfterValue
            suffixLabel="Postcode"
            error={showGenericError(postCode)}
          />

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </div>
  );
}
