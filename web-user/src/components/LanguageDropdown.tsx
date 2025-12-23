import type { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

interface Language {
  code: string;
  label: string;
  countryCode: string;
}

const languages: Language[] = [
  { code: "en", label: "English", countryCode: "US" },
  { code: "es", label: "Spanish", countryCode: "ES" },
  { code: "fr", label: "French", countryCode: "FR" },
  { code: "de", label: "German", countryCode: "DE" },
  { code: "ar", label: "Arabic", countryCode: "SA" }, // Arabic (Saudi Arabia)
  { code: "hi", label: "Hindi", countryCode: "IN" }, // Hindi (India)
];

const LanguageDropdown: FC = () => {
  const currentLanguage = languages[0]; // default English

  const handleChange = (lang: Language) => {
    console.log("Language selected:", lang.code);
    // integrate with i18n or context
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-between px-4 py-2 rounded-md cursor-pointer hover:bg-white/10">
          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span className="text-sm">Language</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <ReactCountryFlag
              svg
              countryCode={currentLanguage.countryCode}
              style={{ width: "1.25em", height: "1.25em" }}
            />
            <span>{currentLanguage.label}</span>
          </div>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" side="right" className="w-44">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang)}
            className="flex items-center gap-3"
          >
            <ReactCountryFlag
              svg
              countryCode={lang.countryCode}
              style={{ width: "1.25em", height: "1.25em" }}
            />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
