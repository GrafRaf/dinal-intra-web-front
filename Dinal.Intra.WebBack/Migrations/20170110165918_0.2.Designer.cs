using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Dinal.Intra.WebBack.Models;

namespace Dinal.Intra.WebBack.Migrations
{
    [DbContext(typeof(DomainModelSqlContext))]
    [Migration("20170110165918_0.2")]
    partial class _02
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.0-rtm-22752")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Employees");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.WorkOrder", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("EmployeeId");

                    b.Property<string>("Name");

                    b.Property<int?>("OrderId");

                    b.HasKey("Id");

                    b.HasIndex("EmployeeId");

                    b.HasIndex("OrderId");

                    b.ToTable("WorkOrders");
                });

            modelBuilder.Entity("Dinal.Intra.WebBack.Models.WorkOrder", b =>
                {
                    b.HasOne("Dinal.Intra.WebBack.Models.Employee", "Employee")
                        .WithMany()
                        .HasForeignKey("EmployeeId");

                    b.HasOne("Dinal.Intra.WebBack.Models.Order", "Order")
                        .WithMany()
                        .HasForeignKey("OrderId");
                });
        }
    }
}
