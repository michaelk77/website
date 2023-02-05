from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    hashpassword = Column(String)
    email = Column(String)
    overinfo=Column(String)
    adress=Column(String)
    history_of_shop=Column(String)


class Item(Base):
    __tablename__ = 'items'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    price = Column(Integer)
    overinfo=Column(String)
    sale=Column(Integer)
    grupp=Column(String)
