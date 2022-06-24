import Link from "next/link";

import { POWERED_BY_URL, POWERED_BY_LOGO, SITE_NAME } from "@lib/config/constants";
import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="p-1 text-center text-xs sm:text-right">
      <Link href={POWERED_BY_URL}>
        <a target="_blank" className="text-gray-500 opacity-50 hover:opacity-100 dark:text-white">
          {t("powered_by")}{" "}
          <img
            className="relative -mt-px inline h-[25px] w-auto dark:hidden"
            src={POWERED_BY_LOGO} alt={SITE_NAME}
          />
          <img
            className="relativ -mt-px hidden h-[25px] w-auto dark:inline"
            src={POWERED_BY_LOGO} alt={SITE_NAME}
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;
