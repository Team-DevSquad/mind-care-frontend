import RatingCard from "@/components/RatingCard";

const ratingList = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg",
    patient: "Ajay Maurya",
    rating: 4,
    description: "Good doctor",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dp9kpxfpa/image/upload/v1702726560/lxenzj2f0ycvd2ukipja.jpg",
    patient: "Ravi Kumar",
    rating: 5,
    description: "Excellent service",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dp9kpxfpa/image/upload/v1702657384/edktcvfwzfdgcwdnmxca.jpg",
    patient: "Sarthak Gupta",
    rating: 3,
    description: "Average experience",
  },
  // Add more objects for more ratings
];

const Ratings = () => {
  if (!ratingList || ratingList.length === 0) {
    return <div>No ratings available</div>;
  }
  return (
    <div>
      <ul className="flex gap-3 mt-4 flex-wrap">
        {ratingList.map((rating) => (
          <RatingCard
            key={rating.id}
            image={rating.image}
            name={rating.patient}
            stars={rating.rating}
            comment={rating.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default Ratings;
