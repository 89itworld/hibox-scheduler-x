import { LOGO, LOGO_ICON, SITE_NAME } from "@lib/config/constants";

export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h1 className="inline">
      <strong>
        {icon ? (
          <img className="mt-6 w-9 mx-auto" alt={SITE_NAME} title={SITE_NAME} src={LOGO_ICON} />
        ) : (
          <img className={small ? "mt-6 w-auto" : "h-5 w-auto"} alt={SITE_NAME} title={SITE_NAME} src={LOGO} />
        )}
      </strong>
    </h1>
  );
}
