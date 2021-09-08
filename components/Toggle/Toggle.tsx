import { Dispatch, SetStateAction, useState } from 'react';
import { Switch } from '@headlessui/react';

type Props = {
  enabled?: boolean;
  setEnabled?: Dispatch<SetStateAction<boolean>>;
};

export default function Toggle({
  enabled: initEnabled = false,
  setEnabled: setExternalEnabled,
}: Props) {
  const [enabled, setEnabled] = useState(initEnabled);

  const handleSetEnabled = (enabled) => {
    setEnabled(enabled);
    setExternalEnabled(enabled);
  };

  return (
    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4 text-sm font-medium text-gray-700 cursor-pointer">
          Use cultivar name
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={handleSetEnabled}
          className={`${
            enabled ? 'bg-indigo-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Cultivar names</span>
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
}
