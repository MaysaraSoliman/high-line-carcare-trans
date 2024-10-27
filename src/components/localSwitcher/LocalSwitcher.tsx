import { Select } from "antd";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { StyledLocalSwitcher } from "./localSwitcher.styled";
import { GlobalOutlined } from "@ant-design/icons";
import Image from "next/image";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    const nextLocale = value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <StyledLocalSwitcher>
      <Select
        defaultValue={localActive}
        onChange={handleChange}
        disabled={isPending}
        suffixIcon={<GlobalOutlined className="switcher-icon" />}
        options={[
          {
            value: "en",
            label: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Image
                  src="/assets/images/countries/icons8-usa-16.png"
                  alt="EN"
                  width={20}
                  height={20}
                  style={{ marginRight: 8 }}
                />
                EN
              </div>
            ),
          },
          {
            value: "ar",
            label: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Image
                  src="/assets/images/countries/icons8-saudi-arabia-16.png"
                  alt="AR"
                  width={20}
                  height={20}
                  style={{ marginRight: 8 }}
                />
                AR
              </div>
            ),
          },
        ]}
      />
    </StyledLocalSwitcher>
  );
};

export default LocalSwitcher;
