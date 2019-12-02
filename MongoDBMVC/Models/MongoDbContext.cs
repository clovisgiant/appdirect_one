using MongoDB.Driver;

namespace MongoDBMVC.Models
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _mongoDb;
        public MongoDbContext()
        {

            
            var client = new MongoClient("mongodb+srv://admin:eduardo23@webwonka-81acm.azure.mongodb.net/test?retryWrites=true&w=majority");
            _mongoDb = client.GetDatabase("Clientes");


        }
        public IMongoCollection<Employee> Employee
        {
            get
            {
                return _mongoDb.GetCollection<Employee>("Employee");
            }
        }
    }
}