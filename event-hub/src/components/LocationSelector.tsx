import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  HStack,
  MenuDivider,
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
    <HStack paddingLeft="40px" fontSize="small">
      <Menu>
        <MenuButton
          fontSize="inherit"
          as={Button}
          rightIcon={<BsChevronDown />}
        >
          {selectedCity || "Locations"}
        </MenuButton>

        <MenuList>
          <>
            {locations.map((location: eventLocation, countryIndex) => (
              <MenuGroup
                title={location.country}
                key={countryIndex}
                fontSize="inherit"
              >
                <MenuDivider />
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
    </HStack>
  );
};
