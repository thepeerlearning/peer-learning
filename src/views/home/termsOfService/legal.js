import { Box, Link } from "@mui/material";
import { Colors } from "../../../components/themes/colors";
import { Fonts } from "../../../components/themes/fonts";

export default function Legal() {
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
        Legal
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
        id="about-peer-learning"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        1. About
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Welcome to{" "}
          <Link
            underline="always"
            sx={{
              display: "inline-flex",
              textDecorationLine: "underline",
            }}
            href="https://www.thepeerlearning.com"
            target="_blank"
          >
            www.thepeerlearning.com
          </Link>{" "}
          (the &quot;Site&quot;). The term &quot;Site&quot; includes other
          platforms (including mobile applications) that Peer Learning may make
          available to you from time to time. Peer Learning Technology Limited
          (&quot;Peer Learning&quot;, &quot;we&quot;, &quot;our&quot;,
          &quot;us&quot;) operates and maintains this Site. We are a registered
          company in Nigeria under the Registration Company Number RC 14697,
          with our registered address at Suite A7, Jima Plaza, Opposite Stanbic
          IBTC Bank, Area 11 Garki Abuja, and an office in the UK. If you need
          to contact us, please email{" "}
          <Box
            component="a"
            sx={{
              display: "inline-flex",
              textDecorationLine: "underline",
            }}
            href="mailto:hello@peerlearning.com"
          >
            hello@peerlearning.com
          </Box>{" "}
          or message our customer service line on WhatsApp. At Peer Learning, we
          make every effort to ensure that all information on this Site is as
          accurate as possible.
        </Box>
      </Box>

      <Box
        component="h6"
        id="role"
        sx={{
          font: `normal normal 700 20px/28px ${Fonts.secondary}`,
          color: Colors.primary,
          letterSpacing: "-0.12px",
          m: 0,
        }}
      >
        2. Monthly Subscription
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          At Peer Learning, we offer monthly subscriptions
          (&quot;Subscriptions&quot;) to our customers who wish to participate
          in our programs. Upon subscribing, you will be charged for the first
          month on the date of the first class, and subsequently billed on a
          recurring and periodic basis (&quot;Billing Cycle&quot;), which is set
          on a monthly basis from the date of the first class. Your Subscription
          will automatically renew at the end of each Billing Cycle under the
          same terms unless you or Peer Learning cancels it. To cancel your
          Subscription renewal, you can either visit your online account
          management page or contact our customer support team at
          hello@thepeerlearning.com or by phone. Please note that a valid
          payment method, such as a credit card, is required for processing the
          payment for your Subscription. To ensure the accuracy and completeness
          of your billing information, please provide us with your full name,
          address, state, zip code, telephone number, and valid payment method
          information. By submitting your payment information, you authorize
          Peer Learning to charge your account for all Subscription fees using
          the provided payment instrument. We do not process charges using an
          incorrect, expired, or over-the-limit credit card, and we will try to
          contact you if any issues arise. If you fail to pay any fees or
          charges when due, we reserve the right to suspend or terminate your
          access to our services or privileges. Peer Learning reserves the right
          to modify Subscription fees for its services at any time. Any changes
          in fees will take effect at the end of the current Billing Cycle. In
          the event of any Subscription fee changes, we will provide you with
          reasonable prior notice to allow you the opportunity to modify or
          terminate your Subscription before the new fees become effective. By
          continuing to use Peer Learning after the Subscription fee change
          takes effect, you agree to pay the new Subscription fee amount. We
          understand that changes in fees may impact your decision to continue
          using our services, and we aim to provide you with sufficient notice
          and flexibility to make informed decisions.
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
        3. Refund and Cancellation
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Our policy at Peer Learning is that all registration are final.
          However, we understand that there may be extenuating circumstances
          where a refund may be necessary. In these cases, we will consider
          refund requests on a case-by-case basis and make a determination at
          our sole discretion. We strive to provide high-quality services and
          programs, but we also recognize the importance of customer
          satisfaction. If you feel that you have a valid reason for requesting
          a refund, please contact our customer support at{" "}
          <Box
            component="a"
            sx={{
              display: "inline-flex",
              textDecorationLine: "underline",
            }}
            href="mailto:hello@peerlearning.com"
          >
            hello@peerlearning.com
          </Box>{" "}
          team to discuss your options. While we cannot guarantee a refund in
          all cases, we will do our best to find a satisfactory resolution for
          both parties.
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
        5. You must keep your details safe
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          As a user, it is your responsibility to ensure the safety and
          confidentiality of your account credentials, including limiting access
          to your computer and account. Any activity or action that occurs under
          your account and password is your responsibility, and you agree to
          accept the consequences of such activities. In the event of any
          unauthorized access or security breach, you must immediately inform us
          to prevent any potential harm. Please note that Peer Learning reserves
          the right to refuse service, terminate accounts, remove or edit
          content, or cancel orders at our sole discretion. This decision is
          taken after careful consideration and is aimed at maintaining the
          integrity and security of our platform.
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
        6. Termination of agreement
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          By using and accessing Peer Learning, you agree to release, defend,
          indemnify, and hold harmless Peer Learning and its licensees,
          licensors, employees, contractors, agents, officers, and directors
          from any and all claims, damages, obligations, losses, liabilities,
          costs or debts, and expenses, including but not limited to
          attorney&apos;s fees, that may arise from a) your use and access of
          Peer Learning, whether by you or anyone using your account and
          password or b) your breach of these Terms. The purpose of this
          indemnification clause is to safeguard Peer Learning and its
          affiliates against any potential legal disputes or liabilities that
          may arise as a result of your use of the platform. It is important
          that you fully comprehend and agree to these terms before utilizing
          Peer Learning. By doing so, you agree to take accountability for any
          potential legal costs or liabilities that may arise as a result of
          your actions or breach of these Terms.
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
        7. Limitation of liability
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Peer Learning, its directors, employees, partners, agents, suppliers,
          or affiliates, shall not be held liable for any indirect, incidental,
          special, consequential, or punitive damages, including, but not
          limited to, loss of profits, data, use, goodwill, or other intangible
          losses, arising from (i) your use or inability to use Peer Learning;
          (ii) any behavior or content of any third party on Peer Learning;
          (iii) any content obtained from Peer Learning; and (iv) unauthorized
          access, use, or alteration of your transmissions or content. This
          limitation of liability applies regardless of the legal theory on
          which the claim is based, whether based on warranty, contract, tort
          (including negligence), or any other legal theory, even if Peer
          Learning has been advised of the possibility of such damages.
          Furthermore, if any remedy set forth herein is found to have failed of
          its essential purpose, this limitation of liability shall still apply.
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
        8. Disclaimers
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          The use of Peer Learning is solely at your own risk. Peer Learning is
          provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis,
          without any warranties, express or implied, including but not limited
          to, implied warranties of merchantability, fitness for a particular
          purpose, non-infringement, or course of performance. Peer Learning,
          its subsidiaries, affiliates, and licensors do not guarantee that a)
          Peer Learning will operate uninterrupted, be secure, or available at
          any particular time or location; b) any errors or defects will be
          corrected; c) Peer Learning is free of viruses or other harmful
          components; or d) the results of using Peer Learning will meet your
          expectations or requirements.
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
        9. Limitation of liability
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          Peer Learning, its directors, employees, partners, agents, suppliers,
          or affiliates, shall not be held liable for any indirect, incidental,
          special, consequential, or punitive damages, including, but not
          limited to, loss of profits, data, use, goodwill, or other intangible
          losses, arising from (i) your use or inability to use Peer Learning;
          (ii) any behavior or content of any third party on Peer Learning;
          (iii) any content obtained from Peer Learning; and (iv) unauthorized
          access, use, or alteration of your transmissions or content. This
          limitation of liability applies regardless of the legal theory on
          which the claim is based, whether based on warranty, contract, tort
          (including negligence), or any other legal theory, even if Peer
          Learning has been advised of the possibility of such damages.
          Furthermore, if any remedy set forth herein is found to have failed of
          its essential purpose, this limitation of liability shall still apply.
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
        10. We may make changes to these terms
        <Box
          sx={{
            width: "100%",
            font: `normal normal 300 15px/152% ${Fonts.secondary}`,
            textAlign: "justify",
            mt: 1,
          }}
        >
          We, at Peer Learning, have the sole discretion to modify or replace
          our terms at any time. In the event of a significant change to our
          terms, we will give a notice of at least thirty (30) days prior to the
          new terms taking effect. What qualifies as a significant change will
          be determined solely by us. Your continued use of Peer Learning after
          the revisions become effective indicates your agreement to be bound by
          the updated terms. If you disagree with the updated terms, your
          authorization to use Peer Learning will be revoked.
        </Box>
      </Box>
    </Box>
  );
}
