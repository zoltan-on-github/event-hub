import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function EventCardSkeleton() {
  return (
    <Card>
      <Skeleton height="200px">
        <SkeletonText />
      </Skeleton>
    </Card>
  );
}

export default EventCardSkeleton;
