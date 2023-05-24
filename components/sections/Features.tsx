import { useTranslations } from "next-intl";

type FeatureType = "education";

function Feature({ type }: { type: FeatureType }) {
  const t = useTranslations(`Features.${type}`);

  return (
    // TODO: figure out semantic html
    <div>
      <h2>{t("header")}</h2>
      <p>{t.rich("content")}</p>
    </div>
  );
}

function Features() {}

export default Features;
