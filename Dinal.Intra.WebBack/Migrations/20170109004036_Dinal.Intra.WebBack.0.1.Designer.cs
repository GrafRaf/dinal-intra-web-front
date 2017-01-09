using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Dinal.Intra.WebBack.Models;

namespace Dinal.Intra.WebBack.Migrations
{
    [DbContext(typeof(DomainModelPostgreSqlContext))]
    [Migration("20170109004036_Dinal.Intra.WebBack.0.1")]
    partial class DinalIntraWebBack01
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752");

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<DateTime>("UpdatedTimestamp");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<DateTime>("UpdatedTimestamp");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.WorkOrder", b =>
                {
                    b.Property<int>("Id");

                    b.Property<string>("Name");

                    b.Property<DateTime>("UpdatedTimestamp");

                    b.HasKey("Id");

                    b.ToTable("WorkOrders");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.WorkOrder", b =>
                {
                    b.HasOne("Dinal.Intra.WebBack.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("Id")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dinal.Intra.WebBack.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("Id")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
