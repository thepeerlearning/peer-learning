import { Box, Link, Typography } from "@mui/material"
import React from "react"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function TermsOfService() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignSelf: "stretch",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 720,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Welcome to Peer Learning!
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="p"
              sx={{
                width: "100%",
                font: `normal normal 400 normal  18px/28px  ${Fonts.primary}`,
                color: Colors.textColor,
                textAlign: "justify",
              }}
            >
              The terms and conditions in this document (the &quot;Terms of
              Use&quot;) apply when you view or use the Service via our website
              located at{" "}
              <Link
                underline="always"
                color="inherit"
                href="https://thepeerlearning.com"
              >
                https://thepeerlearning.com
              </Link>{" "}
              (the &quot;Site&quot;), Peer Learning web app located at{" "}
              <Link
                underline="always"
                color="inherit"
                href="https://thepeerlearning.com"
              >
                https://thepeerlearning.com
              </Link>{" "}
              (the &quot;App&quot;) Throughout the Terms of Use, Peer Learning
              may be referred to as &quot;Peer Learning,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our.&quot; &quot;You&quot; includes both
              you, the student user, and your parent or legal guardian who, if
              you are under the age of 18, has consented to your use of the
              Services and your agreement to these Terms of Use.
            </Typography>
            <Typography
              variant="p"
              sx={{
                width: "100%",
                font: `normal normal 400 normal  18px/28px  ${Fonts.primary}`,
                color: Colors.textColor,
                textAlign: "justify",
              }}
            >
              Please review the Terms of Use carefully. By accessing or using
              the Service, you signify your agreement to the Terms of Use. If
              you do not agree to the Terms of Use, you may not access or use
              the Service. If you are a parent or legal guardian and you provide
              consent for your child to register for the Service, you agree to
              be bound by these Terms of Use in respect of your child&apos;s use
              of the Service.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Key Terms
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal  18px/28px  ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            &quot;User&quot; &quot;you&quot; or &quot;your&quot; means a person,
            organization or entity using the Services, including Parents and
            Teachers.&quot;Parent(s)&quot; means a parent or legal guardian who
            completes Peer Learning account registration process to purchase
            Classes on the Site for the purpose of enrolling their
            child.&quot;Teacher(s)&quot; means a person who completes Peer
            Learning account registration process to offer Classes on the
            Site.&quot;Class(es)&quot; means any online class(es).
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.dark,
            }}
          >
            Access and Use of the Service
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal  18px/28px  ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Services Description: Peer Learning Service is an online platform
            for Africa kids to learn how to code. As a result, Peer Learning is
            responsible for the authenticity, quality, safety, legality, or
            appropriateness of the Classes.Your Registration Obligations: You
            will be required to register with Peer Learning in order to access
            and use certain features of the Service. If you choose to register
            for the Service, you agree to provide and maintain true, accurate,
            current and complete information about yourself as prompted by the
            Service&apos;s registration form. Registration data and certain
            other information about you are governed by our Privacy Policy. You
            must be of legal age to form a binding contract to register for the
            Service (in many jurisdictions, this age is 18). If you are not yet
            of legal age to form a binding contract, then you must get your
            Parent to read these Terms of Service and agree to them for you
            before you use the Service. If you are a Parent and you provide your
            consent to your child&apos;s use of the Service, then you agree to
            be bound by these Terms of Service with respect to your child&apos;s
            use of the Service.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.dark,
            }}
          >
            Do we use cookies and other tracking technologies?
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            When you or your child contacts us by email, through our branded
            social media accounts, through any integrated chat providers we may
            offer, or by telephone, SMS, or physical mail, we may collect
            certain information from you (or your child). This information may
            include your name, username, email address, mobile phone number,
            physical address, and the contents of your communication. We may use
            this information for the purpose of providing the service or support
            requested, or communicating promotions or for marketing purposes.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              color: Colors.dark,
              textAlign: "left",
            }}
          >
            Member Account, Password and Security:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            You are responsible for maintaining the confidentiality of your
            password and account, if any, and are fully responsible for any and
            all activities that occur under your password or account. You agree
            to (a) immediately notify Peer Learning of any unauthorized use of
            your password or account or any other breach of security, and (b)
            ensure that you exit from your account at the end of each session
            when accessing the Service. Peer Learning will not be liable for any
            loss or damage arising from your failure to comply with this
            Section.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              color: Colors.dark,
              textAlign: "left",
            }}
          >
            Modifications to Service:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Peer Learning reserves the right to modify or discontinue,
            temporarily or permanently, the Service (or any part thereof) with
            notice. You agree that Peer Learning will not be liable to you or to
            any third party for any modification, suspension or discontinuance
            of the Service.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
              textAlign: "left",
            }}
          >
            Class Recordings:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Classes that take place through Peer Learning video chat platform
            are automatically recorded by Peer Learning (&quot;Class
            Recordings&quot;). We value student and Teacher privacy, and our use
            of Class Recordings is extremely limited. Specifically, Class
            Recordings are made available only to the Teacher providing the
            Class in question in order to allow them to (1) provide a viewable
            copy to students who missed the Class, or who wish to review the
            Class, for their personal educational purposes; and (2) review the
            Class Recording personally in order to improve their Classes. In
            addition, Peer Learning may use Class Recordings to provide feedback
            to Teachers, to improve our Services, for customer support, and for
            compliance purposes. Peer Learning retains Class Recordings for 90
            days after the date of the applicable Class, subject to our Privacy
            Policy, after which they are deleted. Notwithstanding the foregoing,
            Peer Learning may also delete Class Recordings earlier than 90 days
            under the following circumstances: (a) upon the request of a Parent
            for the deletion of their child&apos;s personally identifiable
            information, or (b) upon the reasonable determination of Peer
            Learning that a Class Recording should be removed to protect the
            privacy of certain Users or because of violations of these Terms of
            Service. We will not use Class Recordings containing images of you
            (or your children) for promotional or any other purposes without
            your express written consent. By using the services, you consent to
            you and/or your child appearing in Class Recordings for the limited
            purposes set forth above.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              color: Colors.dark,
              textAlign: "left",
            }}
          >
            Payment terms
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            The Student will be charged the same amount each billing period
            (month) from the same credit card that was used for the first
            payment.A receipt for each payment will be provided to you, and the
            charge will appear on your credit card statement. You agree that no
            prior notification will be provided unless the date or amount
            changes, in which case you will receive notice from us at least 5
            days prior to the payment being collected.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Cancellation of the Class by Parent
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            To initiate a cancellation, please send a text message in the
            WhatsApp chat specifically created for you or an email to
            hello@thepeerlearning.com. Cancellations must be made with a minimum
            of 24-hour notice prior to the scheduled session. In such cases, no
            payment fees will be incurred. Sessions that are not attended by the
            Student without providing a 24-hour notice will be charged at the
            full rate, without any discount or refund for the missed session(s).
            However, emergent situations are exempt from this policy. Makeup
            classes are available for one-on-one sessions only. For group
            classes, the Tutor will provide the recording of the missed class as
            well as the assignment. If the student wishes to discontinue
            classes, the Parent must notify Peer Learning before the end of
            their billing period. If the notice is given in the middle of the
            billing period, there will be a refund deducted by a transaction fee
            of up to $10.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Cancellation of the Class by KS
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Peer Learning Teacher may cancel Sessions by giving 24-hour prior
            notice to the Parent, in which case no payment fees shall be
            incurred. If the Teacher cancels the Session without 24-hour notice,
            the Student shall notify KS by sending a text message in Whatsapp
            chat or email at hello@thepeerlearning.com, and KS will have to
            provide a make-up Session. If Peer Learning provides less than
            24-hour cancelation notice, it refunds the fee for the class or has
            to do a makeup session plus additional 30-min instructions for the
            student.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Late Arrival
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Both the Student and the Teacher shall arrive within the first 15
            min of the Session. Any lost time because of the late arrival of the
            Teacher shall be compensated for by extending a Session (current or
            future) by mutual agreement and by the amount of time that was lost.
            Any lost time because of the late arrival of the Student does not
            affect the regular duration of the Session, and the class ends as
            scheduled.The Teacher closes the meeting after 15min. If the student
            doesn&apos;t show up within the first 15 min and doesn&apos;t give
            24-hour notice about cancellation, Peer Learning will charge the
            class fee. Unless there was an emergency/force majeure.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Conditions of Use
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            User Conduct: You are solely responsible for all code, video,
            images, information, data, text, software, music, sound,
            photographs, graphics, messages or other materials
            (&quot;content&quot;) that you upload, post, publish or display
            (hereinafter, &quot;upload&quot;) or email or otherwise use via the
            Service. The following are examples of the kind of content and/or
            use that is illegal or prohibited by Peer Learning. Peer Learning
            reserves the right to investigate and take appropriate legal action
            against anyone who, in Peer Learning sole discretion, violates this
            provision, including without limitation, removing the offending
            content from the Service, suspending or terminating the account of
            such violators and reporting you to the law enforcement authorities.
            You agree to not use the Service to:
            <Box
              component="ul"
              sx={{
                width: "100%",
                margin: 0,
                p: 1.8,
              }}
            >
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                email or otherwise upload any content that (i) infringes any
                intellectual property or other proprietary rights of any party;
                (ii) you do not have a right to upload under any law or under
                contractual or fiduciary relationships; (iii) contains software
                viruses or any other computer code, files or programs designed
                to interrupt, destroy or limit the functionality of any computer
                software or hardware or telecommunications equipment; (iv) poses
                or creates a privacy or security risk to any person; (v)
                constitutes unsolicited or unauthorized advertising, promotional
                materials, commercial activities and/or sales, &quot;junk
                mail,&quot; &quot;spam,&quot; &quot;chain letters,&quot;
                &quot;pyramid schemes,&quot; &quot;contests,&quot;
                &quot;sweepstakes,&quot; or any other form of solicitation; (vi)
                is unlawful, harmful, threatening, abusive, harassing, tortious,
                excessively violent, defamatory, vulgar, obscene, pornographic,
                libelous, invasive of another&apos;s privacy, hateful racially,
                ethnically or otherwise objectionable; or (vii) in the sole
                judgment of Peer Learning, is objectionable or which restricts
                or inhibits any other person from using or enjoying the Service,
                or which may expose Peer Learning or its users to any harm or
                liability of any type;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                {" "}
                interfere with or disrupt the Service or servers or networks
                connected to the Service, or disobey any requirements,
                procedures, policies or regulations of networks connected to the
                Service; or
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                or violate any applicable local, state, national or
                international law, or any regulations having the force of law;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                impersonate any person or entity, or falsely state or otherwise
                misrepresent your affiliation with a person or entity;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                solicit personal information from anyone in violation of our
                Privacy Policy;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                harvest or collect email addresses or other contact information
                of other users from the Service by electronic or other means for
                the purposes of sending unsolicited emails or other unsolicited
                communications;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                advertise or offer to sell or buy any goods or services for any
                business purpose that is not specifically authorized;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                further or promote any criminal activity or enterprise or
                provide instructional information about illegal activities; or
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                obtain or attempt to access or otherwise obtain any materials or
                information through any means not intentionally made available
                or provided for through the Service.
              </li>
            </Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Special Notice for International Use; Export Controls:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
            }}
          >
            Software (defined below) available in connection with the Service
            and the transmission of applicable data, if any, is subject to
            United States export controls. No Software may be downloaded from
            the Service or otherwise exported or re-exported in violation of
            U.S. export laws. Downloading or using the Software is at your sole
            risk. Recognizing the global nature of the Internet, you agree to
            comply with all local rules and laws regarding your use of the
            Service, including as it concerns online conduct and acceptable
            content.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Commercial Use:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Unless otherwise expressly authorized herein or in the Service, you
            agree not to display, distribute, license, perform, publish,
            reproduce, duplicate, copy, create derivative works from, modify,
            sell, resell, exploit, transfer or upload for any commercial
            purposes, any portion of the Service, use of the Service, or access
            to the Service.Intellectual Property Rights
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Service Content, Software and Trademarks:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            You acknowledge and agree that the Service may contain content or
            features (&quot;Service Content&quot;) that are protected by
            copyright, patent, trademark, trade secret or other proprietary
            rights and laws. Except as expressly authorized by Peer Learning,
            you agree not to modify, copy, frame, scrape, rent, lease, loan,
            sell, distribute or create derivative works based on the Service or
            the Service Content, in whole or in part, except that the foregoing
            does not apply to your own User Content (as defined below) that you
            legally upload to the Service. For the sake of clarity, you
            acknowledge and agree that Class Recordings constitute Service
            Content, not User Content. In connection with your use of the
            Service you will not engage in or use any data mining, robots,
            scraping or similar data gathering or extraction methods. If you are
            blocked by Peer Learning from accessing the Service (including by
            blocking your IP address), you agree not to implement any measures
            to circumvent such blocking (e.g., by masking your IP address or
            using a proxy IP address). Any use of the Service or the Service
            Content other than as specifically authorized herein is strictly
            prohibited. The technology and software underlying the Service or
            distributed in connection therewith are the property of Peer
            Learning, our affiliates and our partners (the
            &quot;Software&quot;). You agree not to copy, modify, create a
            derivative work of, reverse engineer, reverse assemble or otherwise
            attempt to discover any source code, sell, assign, sublicense, or
            otherwise transfer any right in the Software. Any rights not
            expressly granted herein are reserved by Peer Learning.The Peer
            Learning name and logos are trademarks and service marks of Peer
            Learning (collectively the &quot;Peer Learning Trademarks&quot;).
            Other Peer Learning, product, and service names and logos used and
            displayed via the Service may be trademarks or service marks of
            their respective owners who may or may not endorse or be affiliated
            with or connected to Peer Learning. You should not interpret
            anything in these Terms of Service or the Service to mean that Peer
            Learning is in any way explicitly or implicitly giving you any
            license or right to use any of Peer Learning Trademarks displayed on
            the Service, without our prior written permission in each instance.
            All goodwill generated from the use of Peer Learning Trademarks is
            only for OKS&apos; exclusive benefit.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "left",
            justifyContent: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Third Party Material:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Under no circumstances will Peer Learning be liable in any way for
            any content or materials of any third parties (including users),
            including, but not limited to, for any errors or omissions in any
            content or for any loss or damage of any kind incurred as a result
            of the use of any such content. You acknowledge that Peer Learning
            may, but is not required to, pre-screen content, and Peer Learning
            and its designees will have the right (but not the obligation) in
            their sole discretion to refuse or remove any content that is
            available via the Service. Without limiting the foregoing, Peer
            Learning and its designees will have the right to remove any content
            that violates these Terms of Service or is deemed by Peer Learning,
            in its sole discretion, to be otherwise objectionable. You agree
            that you must evaluate, and bear all risks associated with, the use
            of any content, including any reliance on the accuracy,
            completeness, or usefulness of such content.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
            }}
          >
            User Content Transmitted Through the Service:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            With respect to the content or other materials you upload through
            the Service or share with other users or recipients (collectively,
            &quot;User Content&quot;), you represent and warrant that you own
            all right, title and interest in and to such User Content,
            including, without limitation, all copyrights and rights of
            publicity contained therein. You shall retain any intellectual
            property rights that you hold in your User Content, and Peer
            Learning does not claim any ownership (copyright, trademark, or
            otherwise) over your User Content. By submitting, posting or
            otherwise uploading User Content on or through the Services you give
            Peer Learning a worldwide, nonexclusive, perpetual, irrevocable,
            fully sub-licensable, royalty-free right and license as set below:
            <Box
              component="ul"
              sx={{
                width: "100%",
                margin: 0,
                p: 1.8,
              }}
            >
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                with respect to User Content that you submit, post or otherwise
                make publicly or generally available via the Service (e.g.
                public forum posts), the license to use, reproduce, modify,
                adapt, publish, translate, create derivative works from,
                distribute, publicly perform, and publicly display such User
                Content (in whole or part) worldwide via the Services or
                otherwise, and/or to incorporate it in other works in any form,
                media, or technology now known or later developed for any legal
                business purpose; and
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                with respect to User Content that you submit, post or otherwise
                transmit privately via the Services (e.g. via private lessons or
                messages with other Users), the license to use, reproduce,
                modify, adapt, publish, translate, create derivative works from,
                distribute, publicly perform and publicly display such User
                Content for the sole purpose of enabling Peer Learning to
                provide you with the Services.
              </li>
            </Box>
            You acknowledge and agree that any questions, comments, suggestions,
            ideas, feedback or other information about the Service
            (&quot;Submissions&quot;), provided by you to Peer Learning are
            non-confidential and Peer Learning will be entitled to the
            unrestricted use and dissemination of these Submissions for any
            purpose, commercial or otherwise, without acknowledgment or
            compensation to you.You acknowledge and agree that Peer Learning may
            preserve content and may also disclose content if required to do so
            by law or in the good faith belief that such preservation or
            disclosure is reasonably necessary to: (a) comply with legal
            process, applicable laws or government requests; (b) enforce these
            Terms of Service; (c) respond to claims that any content violates
            the rights of third parties; or (d) protect the rights, property, or
            personal safety of Peer Learning, its users and the public. You
            understand that the technical processing and transmission of the
            Service, including your content, may involve (a) transmissions over
            various networks; and (b) changes to conform and adapt to technical
            requirements of connecting networks or devices.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
            }}
          >
            Copyright Complaints:
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Peer Learning respects the intellectual property of others, and we
            ask our users to do the same. If you believe that your work has been
            copied in a way that constitutes copyright infringement or that your
            intellectual property rights have been otherwise violated, you
            should notify Peer Learning of your infringement claim in accordance
            with the procedure set forth below. Peer Learning will process and
            investigate notices of alleged infringement and will take
            appropriate actions under the Digital Millennium Copyright Act
            (&quot;DMCA&quot;) and other applicable intellectual property laws
            with respect to any alleged or actual infringement. A notification
            of claimed copyright infringement should be emailed to KS Copyright
            Agent at hello@thepeerlearning.com (Subject line: &quot;DMCA
            Takedown Request&quot;).
            <Box
              component="ul"
              sx={{
                width: "100%",
                margin: 0,
                p: 1.8,
              }}
            >
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                a description and proof of ownership of the copyright or other
                intellectual property interest, including but not limited to the
                registration number and certificate, where applicable;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                an electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright or other
                intellectual property interest; a description of the copyrighted
                work or other intellectual property that you claim has been
                infringed including a specific link to the alleged infringed
                content; your address, telephone number, and email address;
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                a statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright or intellectual
                property owner, its agent, or the law; and
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                a statement by you, made under penalty of perjury, that the
                above information in your Notice is accurate and that you are
                the copyright or intellectual property owner or authorized to
                act on the copyright or intellectual property owner&apos;s
                behalf.
              </li>
            </Box>
            Each notice shall be limited to no more than ten individual
            claims.If said notice includes more than the max number of claims,
            Peer Learning will only address the first ten in such notice.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
            }}
          >
            Third Party Websites
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            The Service may provide, or third parties may provide, links or
            other access to other sites and resources on the Internet. Peer
            Learning has no control over such sites and resources and Peer
            Learning is not responsible for and does not endorse such sites and
            resources. You further acknowledge and agree that Peer Learning will
            not be responsible or liable, directly or indirectly, for any damage
            or loss caused or alleged to be caused by or in connection with use
            of or reliance on any content, events, goods or services available
            on or through any such site or resource. Any dealings you have with
            third parties found while using the Service are between you and the
            third party, and you agree that Peer Learning is not liable for any
            loss or claim that you may have against any such third party.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Social Networking Services
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            You may enable or log in to the Service via various online third
            party services, such as social media and social networking services
            like Facebook or Twitter (&quot;Social Networking Services&quot;).
            By logging in or directly integrating these Social Networking
            Services into the Service, we make your online experiences richer
            and more personalized. To take advantage of this feature and
            capabilities, we may ask you to authenticate, register for or log
            into Social Networking Services on the websites of their respective
            providers. As part of such integration, the Social Networking
            Services will provide us with access to certain information that you
            have provided to such Social Networking Services, and we will use,
            store and disclose such information in accordance with our Privacy
            Policy. For more information about the implications of activating
            these Social Networking Services and Peer Learning&apos; use,
            storage and disclosure of information related to you and your use of
            such services within KS (including, but not limited to, your friend
            lists), please see our Privacy Policy. However, please remember that
            the manner in which Social Networking Services use, store and
            disclose your information is governed solely by the policies of such
            third parties, and Peer Learning shall have no liability or
            responsibility for the privacy practices or other actions of any
            third party site or service that may be enabled within the Service.
            In addition, Peer Learning is not responsible for the accuracy,
            availability or reliability of any information, content, goods,
            data, opinions, advice or statements made available in connection
            with Social Networking Services. As such, Peer Learning is not
            liable for any damage or loss caused or alleged to be caused by or
            in connection with use of or reliance on any such Social Networking
            Services. Peer Learning enables these features merely as a
            convenience and the integration or inclusion of such features does
            not imply an endorsement or recommendation.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Indemnity and Release
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            You agree to release, indemnify and hold Peer Learning and its
            affiliates and their officers, employees, directors and agents
            (collectively, &quot;Indemnitees&quot;) harmless from any and all
            losses, damages, expenses, including reasonable attorneys&apos;
            fees, rights, claims, actions of any kind and injury (including
            death) arising out of or relating to your use of the Service, any
            User Content, your connection to the Service, your violation of
            these Terms of Service or your violation of any rights of another.
            If you are a California resident, you waive California Civil Code
            Section 1542, which says: &quot;A general release does not extend to
            claims which the creditor does not know or suspect to exist in his
            favor at the time of executing the release, which if known by him
            must have materially affected his settlement with the debtor.&quot;
            If you are a resident of another jurisdiction, you waive any
            comparable statute or doctrine.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Disclaimer of Warranties
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS
            PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.
            PEER LEARNING EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO
            THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, TITLE AND NON-INFRINGEMENT. PEER LEARNING MAKES NO WARRANTY
            THAT (I) THE SERVICE WILL MEET YOUR REQUIREMENTS, (II) THE SERVICE
            WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE
            RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE
            ACCURATE OR RELIABLE, OR (IV) THE QUALITY OF ANY PRODUCTS, SERVICES,
            INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH
            THE SERVICE WILL MEET YOUR EXPECTATIONS.YOU ACKNOWLEDGE AND AGREE
            THAT ANY CRIMINAL BACKGROUND CHECKS CONDUCTED BY KS ON TEACHERS ARE
            SOLELY FOR ITS OWN BENEFIT. PEER LEARNING MAKES NO REPRESENTATIONS
            OR WARRANTIES AS TO THE CONDUCT OF USERS ON THE SITE OR SERVICE.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Limitation of Liability
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            YOU EXPRESSLY UNDERSTAND AND AGREE THAT PEER LEARNING WILL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT
            LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER
            INTANGIBLE LOSSES (EVEN IF PEER LEARNING HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT,
            NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (I) THE
            USE OR THE INABILITY TO USE THE SERVICE; (II) THE COST OF
            PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY
            GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR
            MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE
            SERVICE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
            TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY
            ON THE SERVICE; OR (V) ANY OTHER MATTER RELATING TO THE SERVICE. IN
            NO EVENT WILL KS&apos; TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
            LOSSES OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID PEER
            LEARNING IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED
            DOLLARS ($100).SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OR
            EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF
            LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME
            OF THE ABOVE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU OR BE
            ENFORCEABLE WITH RESPECT TO YOU. IF YOU ARE DISSATISFIED WITH ANY
            PORTION OF THE SERVICE OR WITH THESE TERMS OF SERVICE, YOUR SOLE AND
            EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICE.IF YOU ARE A
            USER FROM NEW JERSEY, THE FOREGOING SECTIONS TITLED &quot;DISCLAIMER
            OF WARRANTIES&quot; AND &quot;LIMITATION OF LIABILITY&quot; ARE
            INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE
            STATE OF NEW JERSEY. IF ANY PORTION OF THESE SECTIONS IS HELD TO BE
            INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF
            SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS
            OF THE APPLICABLE SECTIONS. Dispute Resolution By Binding
            Arbitration: PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR
            RIGHTS
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Limitation of Liability
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            YOU EXPRESSLY UNDERSTAND AND AGREE THAT PEER LEARNING WILL NOT BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT
            LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER
            INTANGIBLE LOSSES (EVEN IF PEER LEARNING HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT,
            NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (I) THE
            USE OR THE INABILITY TO USE THE SERVICE; (II) THE COST OF
            PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY
            GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR
            MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE
            SERVICE; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
            TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY
            ON THE SERVICE; OR (V) ANY OTHER MATTER RELATING TO THE SERVICE. IN
            NO EVENT WILL KS&apos; TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
            LOSSES OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID PEER
            LEARNING IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED
            DOLLARS ($100).SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OR
            EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF
            LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME
            OF THE ABOVE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU OR BE
            ENFORCEABLE WITH RESPECT TO YOU. IF YOU ARE DISSATISFIED WITH ANY
            PORTION OF THE SERVICE OR WITH THESE TERMS OF SERVICE, YOUR SOLE AND
            EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICE.IF YOU ARE A
            USER FROM NEW JERSEY, THE FOREGOING SECTIONS TITLED &quot;DISCLAIMER
            OF WARRANTIES&quot; AND &quot;LIMITATION OF LIABILITY&quot; ARE
            INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE
            STATE OF NEW JERSEY. IF ANY PORTION OF THESE SECTIONS IS HELD TO BE
            INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF
            SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS
            OF THE APPLICABLE SECTIONS. Dispute Resolution By Binding
            Arbitration: PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR
            RIGHTS
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Agreement to Arbitrate:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            This Dispute Resolution by Binding Arbitration section is referred
            to in this Terms of Service as the &quot;Arbitration
            Agreement.&quot; You agree that any and all disputes or claims that
            have arisen or may arise between you and Peer Learning, whether
            arising out of or relating to this Terms of Service (including any
            alleged breach thereof), the Services, any advertising, any aspect
            of the relationship or transactions between us, shall be resolved
            exclusively through final and binding arbitration, rather than a
            court, in accordance with the terms of this Arbitration Agreement,
            except that you may assert individual claims in small claims court,
            if your claims qualify. Further, this Arbitration Agreement does not
            preclude you from bringing issues to the attention of federal,
            state, or local agencies, and such agencies can, if the law allows,
            seek relief against us on your behalf. You agree that, by entering
            into these Terms of Service, you and Peer Learning are each waiving
            the right to a trial by jury or to participate in a class action.
            Your rights will be determined by a neutral arbitrator, not a judge
            or jury. The Federal Arbitration Act governs the interpretation and
            enforcement of this Arbitration Agreement.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Prohibition of Class and Representative Actions and
            Non-Individualized Relief:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            YOU AND PEER LEARNING AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST
            THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR
            CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION OR
            PROCEEDING. UNLESS BOTH YOU AND PEER LEARNING AGREE OTHERWISE, THE
            ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE THAN ONE PERSON&apos;S
            OR PARTY&apos;S CLAIMS AND MAY NOT OTHERWISE PRESIDE OVER ANY FORM
            OF A CONSOLIDATED, REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE
            ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND
            DECLARATORY RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING
            RELIEF AND ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF
            NECESSITATED BY THAT PARTY&apos;S INDIVIDUAL CLAIM(S).
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Pre-Arbitration Dispute Resolution:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            Peer Learning is always interested in resolving disputes amicably
            and efficiently, and most customer concerns can be resolved quickly
            and to the customer&apos;s satisfaction by emailing customer support
            at hello@thepeerlearning.com. The Notice must (i) describe the
            nature and basis of the claim or dispute and (ii) set forth the
            specific relief sought. If Peer Learning and you do not resolve the
            claim within sixty (60) calendar days after the Notice is received,
            you or Peer Learning may commence an arbitration proceeding. During
            the arbitration, the amount of any settlement offer made by Peer
            Learning or you shall not be disclosed to the arbitrator until after
            the arbitrator determines the amount, if any, to which you or Peer
            Learning is entitled.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Confidentiality:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            All aspects of the arbitration proceeding, and any ruling, decision,
            or award by the arbitrator, will be strictly confidential for the
            benefit of all parties.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Severability:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            If a court or the arbitrator decides that any term or provision of
            this Arbitration Agreement (other than the subsection (b) titled
            &quot;Prohibition of Class and Representative Actions and
            Non-Individualized Relief&quot; above) is invalid or unenforceable,
            the parties agree to replace such term or provision with a term or
            provision that is valid and enforceable and that comes closest to
            expressing the intention of the invalid or unenforceable term or
            provision, and this Arbitration Agreement shall be enforceable as so
            modified. If a court or the arbitrator decides that any of the
            provisions of subsection (b) above titled &quot;Prohibition of Class
            and Representative Actions and Non-Individualized Relief&quot; are
            invalid or unenforceable, then the entirety of this Arbitration
            Agreement shall be null and void. The remainder of the Terms of
            Service will continue to apply.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Future Changes to Arbitration Agreement:
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            Notwithstanding any provision in this Terms of Service to the
            contrary, Peer Learning agrees that if it makes any future change to
            this Arbitration Agreement (other than a change to the Notice
            Address) while you are a user of the Services, you may reject any
            such change by sending Peer Learning written notice within thirty
            (30) calendar days of the change to the Notice Address provided
            above. By rejecting any future change, you are agreeing that you
            will arbitrate any dispute between us in accordance with the
            language of this Arbitration Agreement as of the date you first
            accepted these Terms of Service (or accepted any subsequent changes
            to these Terms of Service).
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Termination
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            You agree that Peer Learning, in its sole discretion, may suspend or
            terminate your account (or any part thereof) or use of the Service
            and remove and discard any content within the Service, for any
            reason, including, without limitation, for lack of use or if Peer
            Learning believes that you have violated or acted inconsistently
            with the letter or spirit of these Terms of Service. Any suspected
            fraudulent, abusive or illegal activity that may be grounds for
            termination of your use of Service, may be referred to appropriate
            law enforcement authorities. Peer Learning may also in its sole
            discretion and at any time discontinue providing the Service, or any
            part thereof, with or without notice. You agree that any termination
            of your access to the Service under any provision of this Terms of
            Service may be effected without prior notice, and acknowledge and
            agree that Peer Learning may immediately deactivate or delete your
            account and all related information and files in your account and/or
            bar any further access to such files or the Service. Further, you
            agree that Peer Learning will not be liable to you or any third
            party for any termination of your access to the Service.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            User Disputes
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            You agree that you are solely responsible for your interactions with
            any other user in connection with the Service and Peer Learning will
            have no liability or responsibility with respect thereto. Peer
            Learning reserves the right, but has no obligation, to become
            involved in any way it deems necessary with disputes between you and
            any other user of the Service.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            General
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            These Terms of Service constitute the entire agreement between you
            and Peer Learning and govern your use of the Service, superseding
            any prior agreements between you and Peer Learning with respect to
            the Service. You also may be subject to additional terms and
            conditions that may apply when you use affiliate or third party
            services, third party content or third party software. These Terms
            of Service will be governed by the laws of the State of Maryland
            without regard to its conflict of law provisions. With respect to
            any disputes or claims not subject to arbitration, as set forth
            above, you and Peer Learning agree to submit to the personal and
            exclusive jurisdiction of the state and federal courts located
            within Montgomery County, Maryland. The failure of Peer Learning to
            exercise or enforce any right or provision of these Terms of Service
            will not constitute a waiver of such right or provision. If any
            provision of these Terms of Service is found by a court of competent
            jurisdiction to be invalid, the parties nevertheless agree that the
            court should endeavor to give effect to the parties&apos; intentions
            as reflected in the provision, and the other provisions of these
            Terms of Service remain in full force and effect. You agree that
            regardless of any statute or law to the contrary, any claim or cause
            of action arising out of or related to use of the Service or these
            Terms of Service must be filed within one (1) year after such claim
            or cause of action arose or be forever barred. A printed version of
            this agreement and of any notice given in electronic form will be
            admissible in judicial or administrative proceedings based upon or
            relating to this agreement to the same extent and subject to the
            same conditions as other business documents and records originally
            generated and maintained in printed form. You may not assign these
            Terms of Service without the prior written consent of Peer Learning,
            but Peer Learning may assign or transfer these Terms of Service, in
            whole or in part, without restriction. The section titles in these
            Terms of Service are for convenience only and have no legal or
            contractual effect. Notices to you may be made via either email or
            regular mail. The Service may also provide notices to you of changes
            to these Terms of Service or other matters by displaying notices or
            links to notices generally on the Service.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Your Privacy
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            At Peer Learning, we respect the privacy of our users. For details
            please see our Privacy Policy. By using the Service, you consent to
            our collection and use of personal data as outlined therein.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
            }}
          >
            Questions? Concerns? Suggestions?
          </Typography>
          <Typography
            variant="p"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "left",
            }}
          >
            Please contact us at hello@thepeerlearning.com to report any
            violations of these Terms of Service or to pose any questions
            regarding this Terms of Service or the Service.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
