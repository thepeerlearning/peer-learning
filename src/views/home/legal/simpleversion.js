import { Box, Link, Typography } from "@mui/material"
import React from "react"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export default function SimpleVersion() {
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
          alignItems: "center",
          justifyContent: "center",
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
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal  18px/28px  ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "justify",
            }}
          >
            Peer Learning is an ed-tech startup that offers online coding
            classes to Africa kids in the diaspora. This Privacy Policy
            describes how Peer Learning, Inc. (&quot;Peer Learning&quot;,
            &quot;we&quot;, &quot;us&quot;, and/or &quot;our&quot;) handles the
            personal information we collect from and about you when you visit
            our website, www.thepeerlearning.com (“the Site”); when you or your
            children use our web application, app.thepeerlearning.com; or when
            you otherwise interact with us. It also describes certain legal
            rights you may have, subject to applicable law, and how you can
            exercise them. For the purposes of this Privacy Policy, “Personal
            Information” means information about identified or identifiable
            individuals, such as their name, mobile phone number, and email
            address, and includes “personal data” as defined by the European
            Union’s General Data Protection Regulation (“GDPR”) and “personal
            information” as defined by the California Consumer Privacy Act
            (“CCPA”). By using Peer Learning Learning’s Service, you confirm you
            have agreed to the Peer Learning Terms of Use, to the extent
            permitted by law, and have read and understood this Privacy Policy.
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
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            What information do we collect?
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
            When you fill out forms on our Site, including when you request
            additional information about our Service or contact our Admissions
            Advisors, we may require you to provide certain information. This
            information includes:
            <Box
              component="ul"
              sx={{
                width: "100%",
                margin: 0,
                p: 1.8,
                pl: 3,
              }}
            >
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Your personal details: First and last name, email address,
                mobile phone number, and time zone.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Your child&apos;s information: Name, age, and weekly
                availability.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Additional information: How you heard about Peer Learning and
                any other details about your child that you believe are relevant
                for us to know.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Payment information: Name, payment card information, and billing
                address (collected directly by our third-party payment
                processor, Stripe).
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
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "left",
              color: Colors.dark,
            }}
          >
            Information collected when creating your child&apos;s account.
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
            If you enroll for our Service, we will provide you with access to
            the Peer Learner Portal. We will populate your family&apos;s account
            with the information you supplied during registration and ask you to
            set a password for that account, which can be shared with your
            family. Later, your child may choose to add information such as a
            username, profile photo, biographical information, location,
            projects they are working on, and videos about these projects.
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
            variant="h6"
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
            alignItems: "center",
            justifyContent: "center",
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
            Information collected when your child shares user-generated content.
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
            We collect any information that your child provides to us when he or
            she creates or publishes projects, records videos, writes comments,
            or posts on forums accessible to other Peer Learning students and
            instructors.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
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
            Information collected through your child&apos;s participation in
            classes and other virtual events.
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
            To enable our virtual classes and other live events, we use
            third-party services like Zoom. These services stream the video and
            audio feed of interactions between students and instructors, as well
            as the contents of any communications enabled by integrated chat
            functions.
            <Box sx={{ display: "block", my: 4 }}>
              Certain information is incidentally captured through your
              child&apos;s participation in such events. This may include your
              child&apos;s image, voice, movements, physical environment, and
              any other information provided during the event. Ordinarily,
              neither we nor Zoom retain this information.{" "}
            </Box>
            However, from time to time, we may record special events and make
            those recordings accessible to other users of the Peer Learning
            Service. If we plan to record an event, we will clearly indicate it
            beforehand.
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
            Information collected when you apply to work with us.
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
            If you apply to work with us, we will collect any information you
            choose to share in your application, including your name, email
            address, mobile phone number, physical address, employment history,
            and education history.
            <Box sx={{ display: "block", mt: 4 }}>
              We also collect certain information automatically as you navigate
              our Service.
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
              font: `normal normal 600 normal 24px/32px ${Fonts.primary}`,
              color: Colors.dark,
              textAlign: "left",
            }}
          >
            Log data
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
            Like many websites, Peer Learning&apos;s Site automatically collects
            and stores certain information in log files. This information may
            include:
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
                }}
              >
                Device information: Your Internet Protocol (IP) address, browser
                type, and operating system.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Website navigation: The address of the web page you visited
                before and after using our Service, and details about your
                interactions with our Service (date, time, length of stay,
                specific pages accessed).
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Search activity: Search terms used to reach our Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Usage information: The number and frequency of visitors to our
                Service.
              </li>
              <Box
                sx={{
                  display: "block",
                  mt: 4,
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                We use this information to:
              </Box>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Design and administer our Site effectively.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Improve our Service based on usage data.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Gather broad demographic information to understand visitor
                preferences.
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
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Cookies and Similar Technologies:
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
            We collect some of the information mentioned above using cookies and
            similar technologies. A cookie is a small text file that websites
            send to a visitor&apos;s computer or other internet-connected
            device. It uniquely identifies the visitor&apos;s browser and stores
            information or settings within it.
            <Box sx={{ display: "block", mt: 4 }}>
              Peer Learning utilizes cookies and user session data to:
            </Box>
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
                Remember your login status: This ensures a seamless user
                experience by avoiding unnecessary logins.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Guarantee proper website functionality: Cookies help maintain
                the smooth operation of the website and its features.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Track website traffic: We analyze how many users visit specific
                pages to understand user behavior and improve the website.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Prevent fraudulent activity: Cookies play a role in safeguarding
                the website from potential security risks.
              </li>
              <Typography
                sx={{
                  display: "block",
                  mt: 4,
                  width: "100%",
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                You have the option to disable cookies, limit the types you
                allow, or set your browser to notify you when cookies are sent.
                Refer to your chosen web browser&apos;s guidance for assistance
                with managing your cookie preferences.
              </Typography>
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
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Advertising and Analytics:
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
            We partner with third-party companies who provide analytics services
            and serve advertisements on our behalf across the internet and in
            mobile applications. These service providers may use cookies and
            similar technologies to track your engagement with our website,
            online advertising, email campaigns, and text message marketing
            campaigns. This allows us and them to:
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
                }}
              >
                Analyze and track data: This helps us understand user behavior
                and improve our website.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Determine the popularity of content: We can see which content is
                most engaging for our users.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Learn about which ads you see and click: This helps us
                understand the effectiveness of our advertising campaigns.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                }}
              >
                Better understand your online activity: This allows us to
                personalize your experience on our website and with our
                advertising.
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
            alignItems: "center",
            justifyContent: "center",
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
            Payment processors:
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
            In general, when you purchase classes from Peer Learning, your
            payment card information is provided directly to our third-party
            payment processor, Stripe, and Peer Learning does not collect or
            store that information. However, we may receive limited information
            about your payment card from Stripe, such as the last four digits of
            your card, the country of issuance, and the expiration date.
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
            Peer Learning instructors:
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
            We also collect information relating to your child from our
            instructors. For instance, instructors provide session notes about
            the classes they are leading and may provide specific notes about
            individual students&apos; learning styles and habits. They may also
            provide feedback on students&apos; performance directly to students
            and their parents.
            <Typography variant="span" sx={{ display: "block", mt: 4 }}>
              We may combine the information we collect about you from these
              various sources. If the combined information identifies you as an
              individual, we will treat the combined information as Personal
              Information.
            </Typography>
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
            How We Use Your Information
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
            }}
          >
            We use the information described above to:
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
                Provide you with the Service if you are or become a Peer
                Learning customer, including creating your Peer Learning account
                and identifying you when you sign in to your account. Deliver a
                high-quality and customized learning experience.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Process your purchases through our Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Operate and improve our Service, including monitoring and
                analyzing usage, trends, and activities related to the Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Send you technical notices, updates, security alerts, and
                support and administrative messages and information about the
                rules of the Site and Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Identify, fix, and troubleshoot bugs and service errors.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Respond to your requests, inquiries, comments, and suggestions.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Communicate with you about products, services, offers,
                promotions, and events we offer and provide news and information
                we think will be of interest to you.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Post testimonials from parents.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Publish the names of winners or high performers.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Send your child prizes for performance in competitions such as
                our online Hackathon.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Improve our educational, networking, marketing, social, and
                recruitment strategies.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Protect against, identify, investigate, and respond to misuse of
                our Service or other unlawful behavior.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Carry out any other purpose described to you at the time the
                information was collected.
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
            How We Share Your Information
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
            We may share information about you with certain third parties in the
            following circumstances:
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
                Companies under common control: We may share data between and
                among any current or future parents, subsidiaries, affiliates,
                and other companies under common control and ownership with Peer
                Learning.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Process your purchases through our Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Vendors and service providers: We may share personal information
                with vendors, consultants, and other service providers who need
                to access the data to perform services on our behalf, such as
                providing cloud-hosting or cloud-storage services.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Other third parties: We may share your personal information with
                other third parties that provide advertising, campaign
                measurement, online analytics, and other services, to help us
                reach individuals with relevant ads and measure our ad
                campaigns, or to better understand how individuals interact with
                our services and other online services over time and across
                devices. We may also share your information with other third
                parties that provide services including, but not limited to,
                user authentication and payment processing.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Business transfers: We may share personal information with
                another company in connection with or during negotiations of any
                merger, acquisition, financing, reorganization, bankruptcy, sale
                of all or a portion of our assets, or transition of services to
                another provider.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Legal requirements: We may share personal information when we
                believe it is necessary to comply with a legal obligation,
                including lawful requests from public authorities to meet
                national security or law enforcement requirements. We may also
                share personal information when we believe it is necessary to
                protect Peer Learning&apos;s rights and property, to protect the
                safety of our users, and to defend against legal liability.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Consent: We may share personal information with third parties
                with your consent and at your direction, including if we notify
                you that the information you provide will be shared in a
                particular manner and you provide that information.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Peer Learning instructors: In the course of providing our
                service, we also share personal information about students with
                our instructors to enable instructors to communicate with
                students and to assist instructors in understanding each
                student&apos;s individual needs and capabilities.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Social media platforms: Our service may offer social sharing
                features and other integrated tools such as widgets, which allow
                students to share information from their Peer Learning account
                with third-party social media platforms like Instagram,
                LinkedIn, Tiktok, Facebook or Twitter. Using these social
                sharing features is optional.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Public forums and publicly available content: We offer several
                features that allow our students to connect and share content in
                public or semi-public spaces. Students do not have to use these
                features, but if they do, they should be sure to use good
                judgment. Certain information in students&apos; profiles such as
                their username and photo or avatar, the projects they choose to
                share, and any other information they disclose in the public or
                semi-public areas of Peer Learning&apos;s service, may be read,
                collected, stored, or used by others.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Aggregate or de-identified information: We may also share
                aggregate or de-identified information, which cannot reasonably
                be used to identify you, for various purposes including
                compliance with various reporting obligations; for business or
                marketing purposes; or to assist third parties in understanding
                our users&apos; interests, habits, and usage patterns for
                certain programs, content, services, advertisements, promotions,
                and/or functionality available through the service.
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
              textAlign: "left",
              width: "100%",
              font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
              color: Colors.dark,
            }}
          >
            Your Rights and Choices
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
            You have a variety of rights and choices related to our use of your
            Personal Information.
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
                Opting out of email and text message marketing. You can opt out
                of receiving our promotional emails and texts at any time by
                following the instructions included in those communications.
                Please be aware that it may take up to 10 days for us to process
                your email request, and you may continue receiving promotional
                communications from us during that period. If you opt out of
                receiving such communications, please note that we may continue
                to send you non-promotional communications (such as emails or
                text messages related to our business relationship or emails or
                text messages about changes to our legal terms).
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Restricting cookies/Do Not Track. Peer Learning does not change
                its behavior in response to web browser “do not track” signals.
                However, you can configure most browsers to reject cookies or to
                notify you when you are sent a cookie, giving you a chance to
                decide whether or not to accept it. You can consult the help
                section of your browser to find out how to do this. Please note
                that if you choose to remove or reject cookies, this could
                affect the availability and functionality of our Service.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Limiting information in your Peer Learning profile. You can
                control the information we collect about you or your child by
                limiting what information you provide in your Peer Learning
                profile.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Limiting information available through social media platforms.
                If you want to limit or stop receipt of information from
                third-party social media platforms, you can change your privacy
                settings on those other websites. You also may choose not to use
                social features we make available.
              </li>
              <li
                style={{
                  font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  color: Colors.textColor,
                  textAlign: "justify",
                }}
              >
                Access, update, or delete your information. If you are already a
                Peer Learning user, you may access, update, or delete Personal
                Information you have provided by emailing us at{" "}
                <Link
                  underline="hover"
                  href="mailto:hello@thepeerlearning.com"
                  sx={{ color: Colors.textColor }}
                >
                  hello@thepeerlearning.com
                </Link>
                . You may also remove certain optional information that you no
                longer wish to be publicly available through the Service, such
                as your photo or avatar. Subject to the terms of your agreement
                with us, you may terminate your account by emailing us at{" "}
                <Link
                  underline="hover"
                  href="mailto:hello@thepeerlearning.com"
                  sx={{ color: Colors.textColor }}
                >
                  hello@thepeerlearning.com
                </Link>
                . Please note that we may keep certain Personal Information as
                necessary to comply with our legal obligations or for legitimate
                business purposes, such as to resolve disputes or enforce our
                agreements. We may also keep cached archived copies of Personal
                Information for a certain period of time.
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
            alignItems: "center",
            justifyContent: "center",
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
            Links to Other Websites and Third-Party Content:
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
            We may provide links to third-party websites, services, and
            applications, but this Privacy Policy does not apply to their
            privacy practices. We recommend reviewing the privacy policies of
            any third-party service before providing them with personal
            information.
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
            Security
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
            Peer Learning uses generally accepted administrative, physical, and
            technical safeguards we believe are appropriate to protect the
            confidentiality, integrity, and availability of your Personal
            Information. Although we make reasonable efforts to protect Personal
            Information from loss, misuse, or alteration by third parties, you
            should be aware that there is always some risk involved in
            transmitting information over the Internet and storing information
            electronically. Peer Learning cannot and does not guarantee absolute
            security.
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
            Changes to Our Privacy Policy
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
            We may change this Privacy Policy from time to time to reflect
            changes in our practices or in the law. If we make changes to this
            policy, we will post the updated Privacy Policy on our Site and
            indicate when it was last revised. You are advised to review this
            policy periodically to stay informed of our practices. If we make
            material changes, we may provide you with additional notice, such as
            posting a statement on our homepage or sending you a text message or
            an email notification, if we have your email address on file. Your
            continued use of the Service after the revised Privacy Policy has
            become effective indicates that you have read, understood, and
            agreed to the current version of this Privacy Policy, to the extent
            permitted by law.
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
            Contacting Us
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
            If you have any questions about our Privacy Policy or how we protect
            your Personal Information please contact us at{" "}
            <Link
              href="mailto:hello@thepeerlearning.com"
              underline="hover"
              sx={{ color: Colors.textColor }}
            >
              hello@thepeerlearning.com
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: "64px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              font: `normal normal 600 normal 30px/38px ${Fonts.primary}`,
              textAlign: "center",
            }}
          >
            Start your free trial
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
              color: Colors.textColor,
              textAlign: "center",
            }}
          >
            Join over 4,000+ startups already growing with Untitled.
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              mt: "32px",
            }}
          >
            <Box
              sx={{
                width: 128,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 18px",
                borderRadius: 1,
                border: `1px solid #D0D5DD`,
                background: Colors.light,
                color: Colors.primary,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                cursor: "pointer",
                font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
              }}
            >
              Learn more
            </Box>
            <Box
              sx={{
                width: 128,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 18px",
                borderRadius: 1,
                border: `1px solid #D0D5DD`,
                background: Colors.primary,
                color: Colors.light,
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                cursor: "pointer",
                font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
              }}
            >
              Get started
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
