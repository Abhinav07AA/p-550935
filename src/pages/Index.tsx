import CourseCard from "@/components/course/CourseCard";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Learning Journey</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CourseCard
            title="HDFC Module 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
            progress={52}
            coverImage="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true"
            iconImage="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/e37e8ba2dfdd41b9a6fe45b2b676ee0a41f70e6f74f6f5bf95d77c054258fc6a?placeholderIfAbsent=true"
          />
          
          {/* Additional course cards can be added here */}
        </div>
      </div>
    </main>
  );
};

export default Index;