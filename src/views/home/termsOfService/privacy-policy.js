import { Box, Link } from "@mui/material";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";

export default function PrivacyPolicy() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 648,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "28px",
      }}
    >
      <Box
        component="h2"
        sx={{
          width: "100%",
          font: {
            xs: `normal normal 700 30px/41px ${Fonts.secondary}`,
            sm: `normal normal 700 45px/58px ${Fonts.secondary}`,
          },
          color: Colors.primary,
          letterSpacing: "-1.21px",
          mt: 0,
        }}
      >
        Privacy policy
        <Box
          component="div"
          sx={{
            font: `normal normal 400 15px/20px ${Fonts.secondary}`,
            color: Colors.primary,
            letterSpacing: "-0.12px",

            mt: 1,
          }}
        >
          Last Updated: August 5, 2023
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        1. Privacy policy
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Privacy policy This Privacy Policy (the &quot;Policy&quot;) pertains
          to Peer Learning&apos;s online platform, including its website and
          mobile application (referred to as the &quot;Site&quot;). The terms
          &quot;the Company,&quot; &quot;Peer Learning,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot; in this Policy collectively refer
          to Peer Learning Inc. and its affiliated entities. This Policy
          outlines how Peer Learning collects, uses, and shares information
          obtained from or about users of the Site. It also clarifies the
          collection and use of information for advertising purposes.
          <br />
          At Peer Learning, safeguarding your information is of utmost
          importance. This Policy delineates the purposes and methods through
          which we may employ the data gathered from you via the Site. <br />
          We kindly ask that you carefully review this Policy. By utilizing the
          Site and the services offered through it, you are indicating your
          acceptance of the terms specified in this Policy regarding the
          information collected about you via the Site.
          <br />
          <br />
          Authorized Use of the Site: You may only use the Site in accordance
          with applicable local, national, and international laws and
          regulations. Specifically, you agree not to use the Site:
          <br />
          <Box component="ul">
            <li>In a manner that violates any law or regulation.</li>
            <li>
              In a way that is fraudulent or has a fraudulent purpose or effect.
            </li>
            <li>To harm or attempt to harm individuals in any way.</li>
            <li>To bully, insult, intimidate, or humiliate any individual. </li>
            <li>
              To transmit or receive unsolicited or unauthorized advertising or
              promotional content or any other form of similar solicitation
              (spam).
            </li>
            <li>
              To knowingly transmit data or material containing harmful computer
              code, such as viruses, worms, or spyware.
            </li>
            <br />
            Furthermore, you agree:
            <li>
              {" "}
              Not to reproduce, duplicate, copy, or resell any part of the Site,
              as such actions contravene our terms of use.
            </li>
            <li>
              Not to access or disrupt any part of our Site, equipment,
              networks, or software without proper authorization.{" "}
            </li>
          </Box>
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        2. User consent
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          By enrolling in and using the services provided by Peer Learning, you
          are giving your consent to the terms outlined in this Privacy Policy.
          If you do not agree with or consent to these terms, we kindly request
          that you refrain from using our website and services.
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        3. Information we collect
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          When you use the Peer Learning platform, including the website,
          referred to as &quot;the Platform&quot; henceforth, we collect two
          types of information: directly-provided information and
          automatically-connected information.
          <br />
          Directly-Provided Information: Parent and Guardian Information: This
          includes names, phone numbers, and email addresses of parents or
          guardians, card number, expiry date and some of this information is
          necessary for managing our operations efficiently. Student
          Information: This includes details such as school, date of birth, or
          any other information that may be required. These details are
          essential for creating personalized learning experiences.
          <br />
          We use the directly-provided information to better serve our customers
          and tailor our educational offerings effectively.
          <br />
          Automatically-Connected Information: IP Address: Our server receives
          your IP address from your browser. An IP address helps us identify
          your computer or mobile device as you interact with our Platform.
          Cookies: Cookies are digital identifiers that enable our website to
          recognize your device as you navigate between pages and log in or out.
          Changing your browser settings to limit cookie acceptance may affect
          your experience on our website. Aggregate Data: We collect and analyze
          data in an aggregated, anonymized form to understand usage patterns
          and traffic on our Platform. This data doesn’t identify you
          personally.
          <br />
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        4. How we store the information we collect
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          t Peer Learning, we value your privacy and are committed to using the
          information we collect in a responsible and transparent manner. We use
          the collected information for various purposes, aimed at providing you
          with an improved and tailored experience. By using our services, you
          consent to the use of your information as described in this policy.
          <Box
            component="a"
            sx={{
              display: "inline-flex",
              textDecorationLine: "underline",
            }}
            href="mailto:hello@peerlearning.com"
          >
            hello@peerlearning.com
          </Box>
        </Box>
      </Box>

      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        5. What we share with third parties
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          At Peer Learning, we understand that your privacy is important to you.
          We may share your information, including personal information, in the
          following circumstances: Affiliates. We may disclose the information
          we collect from you to our affiliates or subsidiaries. However, their
          use and disclosure of your personally identifiable information will be
          subject to this Policy. Service Providers. We may disclose the
          information we collect from you to third-party vendors, service
          providers, contractors or agents who perform functions on our behalf,
          such as payment processors. Legal Obligations. We may disclose the
          information we collect from you in order to comply with the law, a
          judicial proceeding, court order, or other legal process. Protective
          Measures. We may disclose the information we collect from you where we
          believe it is necessary to investigate, prevent, or take action
          regarding illegal activities or suspected fraud, or to protect the
          rights, property, or safety of Peer Learning, our customers, or
          others.
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        6. Third parties links
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Peer Learning may include links to third-party websites for your
          convenience or information. However, once you leave our website and
          access these third-party sites, you will be subject to their own
          privacy policies and practices. We do not control and are not
          responsible for any information or data that you may provide to those
          websites. We encourage you to review the privacy policies of those
          third-party websites before providing any personal information.
        </Box>
      </Box>
      <Box
        component="h6"
        id="requirement"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        7. Contact Us
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          If you have any questions or concerns about the Service or these
          Terms, please don&apos;t hesitate to get in touch with us. Our team
          can be reached by email at{" "}
          <Box
            component="a"
            sx={{
              display: "inline-flex",
              textDecorationLine: "underline",
            }}
            href="mailto:hello@peerlearning.com"
          >
            hello@peerlearning.com
          </Box>
          , and we will do our best to address your inquiries in a timely and
          efficient manner. At Peer Learning, we value open communication with
          our users and strive to provide a high-quality experience for all.
        </Box>
      </Box>
    </Box>
  );
}
