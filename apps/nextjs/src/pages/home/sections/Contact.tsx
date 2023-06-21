import SectionCard from "../components/SectionCard";

const Contact = () => (
  <SectionCard>
    <h2 className="font-semibold">Contact</h2>
    <hr className="mb-6 mt-4" />

    <ul className="space-y-2">
      <li className="flex flex-row space-x-8">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/stickers/100/email-sign.png"
          alt="email-sign"
        />
        <div className="flex flex-grow items-center">
          <a
            className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
            href="mailto: cristi.satcovschi@gmail.com?subject = Feedback&body = Message"
          >
            cristi.satcovschi@gmail.com
          </a>
        </div>
      </li>
      <li className="flex flex-row space-x-8">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/stickers/100/facebook-messenger.png"
          alt="facebook-messenger"
        />
        <div className="flex flex-grow items-center">
          <a
            target="_blank"
            className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
            href="https://m.me/cristi.satcovschi"
          >
            m.me/cristi.satcovschi
          </a>
        </div>
      </li>
      <li className="flex flex-row space-x-8">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/stickers/100/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
        <div className="flex flex-grow items-center">
          <a
            target="_blank"
            className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
            href="https://www.instagram.com/cristi.satcovschi"
          >
            instagram.com/cristi.satcovschi
          </a>
        </div>
      </li>
      <li className="flex flex-row space-x-8">
        <img
          width="64"
          height="64"
          src="https://img.icons8.com/stickers/100/github.png"
          alt="github"
        />
        <div className="flex flex-grow items-center">
          <a
            target="_blank"
            className="text-blue-600 dark:text-blue-500 break-all font-medium underline hover:no-underline"
            href="https://github.com/cristi-satcovschi"
          >
            github.com/cristi-satcovschi
          </a>
        </div>
      </li>
    </ul>
  </SectionCard>
);

export default Contact;
