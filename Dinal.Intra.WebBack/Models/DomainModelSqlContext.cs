using System;
using System.Linq;
//using DomainModel.Model;
using Microsoft.EntityFrameworkCore;

namespace Dinal.Intra.WebBack.Models
{
    // >dotnet ef migration add testMigration in AspNet5MultipleProject
    public class DomainModelSqlContext : DbContext
    {
        public DomainModelSqlContext(DbContextOptions<DomainModelSqlContext> options) : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<WorkOrder> WorkOrders { get; set; }

        //public DbSet<SourceInfo> SourceInfos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employee>().HasKey(m => m.Id);
            builder.Entity<Order>().HasKey(m => m.Id);
            builder.Entity<WorkOrder>().HasKey(m => m.Id);
            //// shadow properties
            //builder.Entity<Employee>().Property<DateTime>("UpdatedTimestamp");
            //builder.Entity<Order>().Property<DateTime>("UpdatedTimestamp");
            //builder.Entity<WorkOrder>().Property<DateTime>("UpdatedTimestamp");

            base.OnModelCreating(builder);
        }

        //public override int SaveChanges()
        //{
        //    ChangeTracker.DetectChanges();

        //    //updateUpdatedProperty<SourceInfo>();
        //    updateUpdatedProperty<Employee>();
        //    updateUpdatedProperty<Order>();
        //    updateUpdatedProperty<WorkOrder>();

        //    return base.SaveChanges();
        //}

        //private void updateUpdatedProperty<T>() where T : class
        //{
        //    var modifiedSourceInfo =
        //        ChangeTracker.Entries<T>()
        //            .Where(e => e.State == EntityState.Added || e.State == EntityState.Modified);

        //    foreach (var entry in modifiedSourceInfo)
        //    {
        //        entry.Property("UpdatedTimestamp").CurrentValue = DateTime.UtcNow;
        //    }
        //}
    }
}
