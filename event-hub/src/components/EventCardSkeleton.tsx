import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function EventCardSkeleton() {
  return (
    <Card width="250px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px">
        <SkeletonText />
      </Skeleton>
    </Card>
  );
}

export default EventCardSkeleton;
