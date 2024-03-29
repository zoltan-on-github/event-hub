import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useLocations, { eventLocation } from "../hooks/useLocations";

interface Props {
  onSelectLocation: (city: string) => void;
  selectedCity: string | null;
}

export const LocationSelector = ({ onSelectLocation, selectedCity }: Props) => {
  const { locations, error } = useLocations();

  //console.log(error);
  //if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCity || "Locations"}
      </MenuButton>

      <MenuList>
        <>
          {locations.map((location: eventLocation, countryIndex) => (
            <MenuGroup title={location.country} key={countryIndex}>
              {location.cities.map((city: string, cityIndex) => (
                <MenuItem
                  onClick={() => onSelectLocation(city)}
                  key={cityIndex}
                >
                  {city}
                </MenuItem>
              ))}
            </MenuGroup>
          ))}
        </>
      </MenuList>
    </Menu>
  );
};
