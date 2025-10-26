import { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Shield, Info } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useLanguage } from '../shared/LanguageContext';

interface PledgeScreenProps {
  onAccept: () => void;
}

export default function PledgeScreen({ onAccept }: PledgeScreenProps) {
  const { t } = useLanguage();
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="pt-12 pb-8 px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-[#4c6ef5] rounded-full flex items-center justify-center shadow-md">
              <Shield className="w-11 h-11 text-white" />
            </div>
          </div>
          <h1 className="text-center text-gray-900 mb-2">{t.communityPledge}</h1>
          <p className="text-center text-gray-600">{t.maintainSafeCommunity}</p>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="space-y-4">
              <h3 className="text-gray-900">{t.iPledgeTo}</h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#4c6ef5] rounded-full mt-2 shrink-0" />
                  <span>{t.pledgePoint1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#4c6ef5] rounded-full mt-2 shrink-0" />
                  <span>{t.pledgePoint2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#4c6ef5] rounded-full mt-2 shrink-0" />
                  <span>{t.pledgePoint3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#4c6ef5] rounded-full mt-2 shrink-0" />
                  <span>{t.pledgePoint4}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-gray-600">
                    {t.pledgeWarning}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance checkbox */}
          <div className="mt-6 flex items-start gap-3">
            <Checkbox
              id="accept"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="accept" className="text-gray-700 cursor-pointer">
              {t.agreeToPlege}
            </label>
          </div>
        </div>
      </div>

      {/* Accept Button - Fixed at bottom */}
      <div className="px-6 py-4 bg-white border-t border-gray-200 shadow-lg">
        <Button
          onClick={onAccept}
          disabled={!accepted}
          className="w-full bg-[#4c6ef5] hover:bg-[#4263eb] text-white h-14 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {t.iAccept}
        </Button>
      </div>
    </div>
  );
}
