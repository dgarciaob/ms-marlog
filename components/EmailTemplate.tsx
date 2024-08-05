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
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Company: {company}</p>
      <p>Business Line: {businessLine}</p>
      <p>Message: {message}</p>
    </div>
  );
};

export default EmailTemplate;
