import React from "react";

type EmailTemplateProps = {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessLine: string;
  message: string;
};

const EmailTemplate = ({
  name,
  email,
  phone,
  company,
  businessLine,
  message,
}: EmailTemplateProps) => {
  return (
    <div className="flex flex-col">
      Hi Maria, you just received a new lead from the website form:
      <div className="mt-4 rounded-md border border-[#999999] bg-[#FAFAFA] shadow p-8">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Company: {company}</p>
        <p>Business Line: {businessLine}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default EmailTemplate;
